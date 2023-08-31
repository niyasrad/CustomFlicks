import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { HomeMovies, HomeWrapper } from "./Home.styles";
import TopBar from "../../components/topbar/TopBar";
import DayRec from "../../components/dayrec/DayRec";
import MovieGen from "../../components/moviegen/MovieGen";
import { Genres } from "../../hooks/Movies.hook";
import { useGlobalContext } from "../../contexts/Global.context";

export default function Home() {

    const [loading, setLoading] = useState<boolean>(true)
    const { isLoggedIn } = useGlobalContext()

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => {
            clearTimeout(timeout)
        }

    }, [])

    if (loading || !isLoggedIn) {
        return (
            <Loader />
        )
    }


    return (
        <HomeWrapper>
            <TopBar />
            <DayRec />
            <HomeMovies>
                <MovieGen genre={Genres.HORROR}/>
                <MovieGen genre={Genres.ADVENTURE}/>
                <MovieGen genre={Genres.COMEDY}/>
            </HomeMovies>
        </HomeWrapper>    
    )
}