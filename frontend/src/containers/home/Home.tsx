import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { HomeWrapper } from "./Home.styles";
import { ThemeEnum, useThemeContext } from "../../themes/Theme";

export default function Home() {

    const [loading, setLoading] = useState<boolean>(true)
    const { theme, setTheme } = useThemeContext()

    useEffect(() => {
        const timeout = setTimeout(() => setTheme!(ThemeEnum.RSK), 1500)

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
        </HomeWrapper>    
    )
}