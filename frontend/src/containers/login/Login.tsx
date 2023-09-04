import { useEffect, useState } from "react"
import { LoginContent, LoginFieldsWrapper, LoginWrapper } from "./Login.styles"
import { toast } from 'react-toastify';

import logo from '../../assets/CFRegular.svg'
import { useNavigate } from "react-router"
import { useGlobalContext } from "../../contexts/Global.context";
import axios from "axios";
import { ThemeEnum, useThemeContext } from "../../themes/Theme";

export function LoginFields() {

    const [usrID, setUsrID] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()
    const { setTheme } = useThemeContext()
    const { setUserID, setIsLoggedIn, setProfile } = useGlobalContext()

    const handleSubmit = () => {

        const corrID = parseInt(usrID)
        if (Number.isNaN(corrID) || corrID < 0 || corrID > 2500) {
            toast(
                'Invalid ID!', 
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                }
            )
            return
        }
        if (password.length <= 3) {
            toast(
                'Please enter a larger password!', 
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                }
            )
            return
        }
        localStorage.setItem("userid", usrID)
        setUserID!(usrID)
        axios.get(import.meta.env.VITE_BASE_API + '/get_user/' + corrID)
        .then((res) => {
            setProfile!(res.data)
            setTheme!(res.data["Label"] === "least_interested" ? ThemeEnum.RSK : res.data["Label"] === "highly_interested" ? ThemeEnum.PRE : ThemeEnum.RGL)
            navigate('/')
        })
        .catch(() => {})
        setIsLoggedIn!(true)
    }
    
    return (
        <LoginFieldsWrapper>
            <input
                type="text"
                value={usrID}
                placeholder="Enter ID"
                onChange={(e) => setUsrID(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>
                SUBMIT
            </button>
        </LoginFieldsWrapper>
    )

}

export default function Login() {

    const navigate = useNavigate()
    const { isLoggedIn } = useGlobalContext()

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])

    return (
        <LoginWrapper>
            <LoginContent>
                <img 
                    src={logo} 
                    alt="CustomFlicks Logo"
                />
                <h3>LOG IN</h3>
                <LoginFields />
            </LoginContent>
        </LoginWrapper>
    )

}