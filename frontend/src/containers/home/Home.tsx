import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { HomeMovies, HomeWrapper } from "./Home.styles";
import { ThemeEnum, useThemeContext } from "../../themes/Theme";
import TopBar from "../../components/topbar/TopBar";
import DayRec from "../../components/dayrec/DayRec";
import MovieGen from "../../components/moviegen/MovieGen";

export default function Home() {

    const [loading, setLoading] = useState<boolean>(true)
    const { setTheme } = useThemeContext()

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setTheme!(ThemeEnum.PRE)
            
            const secondTimeout = setTimeout(() => {
                setLoading(false)
            }, 2000)

            return () => {
                clearTimeout(secondTimeout)
            }
        }, 1500)

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
            <DayRec />
            <HomeMovies>
                <MovieGen genre="Horror"/>
                <MovieGen genre="Action"/>
                <MovieGen genre="Horror"/>
            </HomeMovies>
        </HomeWrapper>    
    )
}