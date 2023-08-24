import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { HomeWrapper } from "./Home.styles";
import { ThemeEnum, useThemeContext } from "../../themes/Theme";
import TopBar from "../../components/topbar/TopBar";

export default function Home() {

    const [loading, setLoading] = useState<boolean>(true)
    const { setTheme } = useThemeContext()

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setTheme!(ThemeEnum.RSK)
            setLoading(false)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }

    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }


    return (
        <HomeWrapper>
            <TopBar />
        </HomeWrapper>    
    )
}