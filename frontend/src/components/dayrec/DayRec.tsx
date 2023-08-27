import { useEffect, useState } from "react";
import { GenreNames, Genres, MovieInformation, useMovies } from "../../hooks/Movies.hook";
import { DayRecDetails, DayRecWrapper, GenreName } from "./DayRec.styles";
import Loader from "../loader/Loader";

export function RecGenre({ genre }: { genre: Genres }) {
    return (
        <GenreName>
            <p>{GenreNames[genre]}</p>
        </GenreName>
    )
}

export default function DayRec() {
    
    const { data, isLoading } = useMovies(null)
    const [recommendation, setRecommendation] = useState<MovieInformation | null>(null)

    useEffect(() => {
        if (data) {
            setRecommendation(data[0])
        }
    }, [data])

    if (isLoading || !recommendation) {
        return <Loader />
    }

    return (
        <DayRecWrapper>
            <img
                src={`https://image.tmdb.org/t/p/original${recommendation.backdrop_path}`}
                alt="Movie Poster"
            />
            <DayRecDetails>
                <div className="dayrec__link">
                    <h6>CF Recommends</h6>
                    <a 
                        href="#"
                        target="_blank"
                    >
                        <button>WATCH</button>
                    </a>
                </div>
                <div>
                    <h4>{recommendation.title}</h4>
                    <p>{recommendation.overview}</p>
                </div>
                <div>
                    <h6>Genres</h6>
                    <div className="dayrec__genres">
                        {  recommendation.genre_ids.map((genre: number) => <RecGenre genre={genre} />) }
                    </div>
                </div>
            </DayRecDetails>
        </DayRecWrapper>
    )
}