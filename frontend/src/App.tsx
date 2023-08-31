import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './containers/home/Home'
import { ThemeProvider } from 'styled-components'
import { ThemeEnum, useThemeContext } from './themes/Theme'
import { premium, regular, risky } from './themes/Theme.styles'
import Profile, { ProfilerType } from './containers/profile/Profile'
import Login from './containers/login/Login'
import { useLayoutEffect, useState } from 'react'
import { GlobalContext } from './contexts/Global.context'
import axios from 'axios'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '*',
    element: <div>Not Found</div>
  }
])

export function AppWrapper({ children }: { children: React.ReactNode }) {

  const { theme, setTheme } = useThemeContext()

  const [userID, setUserID] = useState<string>('')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [profile, setProfile] = useState<ProfilerType | null>(null)

  const handleSignOut = () => {
    localStorage.removeItem("userid")
    setTheme!(ThemeEnum.RGL)
    setUserID('')
    setProfile(null)
    setIsLoggedIn(false)
  }


  useLayoutEffect(() => {
    const cachedID = localStorage.getItem("userid")
    
    if (cachedID) {
        const corrID = parseInt(cachedID)
        if (!Number.isNaN(corrID) && corrID > 0 && corrID < 2499) {
          setUserID(cachedID)
          axios.get(import.meta.env.VITE_BASE_API + '/get_user/' + corrID)
            .then((res) => {
                setProfile(res.data)
                setTheme!(res.data["Label"] === "least_interested" ? ThemeEnum.RSK : res.data["Label"] === "highly_interested" ? ThemeEnum.PRE : ThemeEnum.RGL)
            })
            .catch(() => {})
          setIsLoggedIn(true)
        } else {
          handleSignOut()
        }
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        userID,
        isLoggedIn,
        profile,
        setUserID,
        setIsLoggedIn,
        setProfile,
        handleSignOut
      }}
    >
      <ThemeProvider
          theme={theme === ThemeEnum.PRE ? premium : theme === ThemeEnum.RGL ? regular : risky}  
      >
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  )

}

export default function App() {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppWrapper>
  )
}