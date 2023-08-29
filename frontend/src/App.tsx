import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './containers/home/Home'
import { ThemeProvider } from 'styled-components'
import { ThemeEnum, useThemeContext } from './themes/Theme'
import { premium, regular, risky } from './themes/Theme.styles'
import Profile from './containers/profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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

export function Wrapper({ children }: { children: React.ReactNode }) {

  const { theme } = useThemeContext()

  return (
    <ThemeProvider
        theme={theme === ThemeEnum.PRE ? premium : theme === ThemeEnum.RGL ? regular : risky}  
    >
      {children}
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  )
}