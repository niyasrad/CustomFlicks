import { useRef } from "react";
import { MovieCard, MovieCardTitle, MovieGenCards, MovieGenList, MovieGenTitle, MovieGenWrapper, MovieNext } from "./MovieGen.styles";
import { GenreNames, Genres, MovieInformation, useMovies } from "../../hooks/Movies.hook";
import { Loading } from "../loader/Loader";

export default function MovieGen({ genre }: { genre: Genres }) {

    const { data, isLoading } = useMovies(genre)

    const cardsContainerRef = useRef<HTMLDivElement | null>(null);
    const cardWidth = 16 * 12
    const totalCardWidth = cardWidth * (data ? data.length : 12)
    const gap = 16 * 2

    const handleNextClick = () => {
        const scrollDistance = cardWidth + gap
        if (cardsContainerRef.current) {
            cardsContainerRef.current.style.scrollBehavior = 'smooth'
            cardsContainerRef.current.scrollLeft += scrollDistance;
            if (cardsContainerRef.current.scrollLeft + (scrollDistance/6) >= totalCardWidth - cardsContainerRef.current.clientWidth) {
                cardsContainerRef.current.scrollLeft = 0
            }
        }
    }

    if (isLoading || !data) {
        return <Loading />
    }

    return (
        <MovieGenWrapper>
            <MovieGenTitle>{GenreNames[genre]}</MovieGenTitle>
            <MovieGenList>
                <MovieGenCards
                    ref={cardsContainerRef}
                >
                {
                    data.map((movie: MovieInformation) => (
                        <MovieCard>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Movie poster" />
                            <MovieCardTitle>
                                <p>{movie.title}</p>
                            </MovieCardTitle>
                        </MovieCard>
                    ))
                }
                </MovieGenCards>
                <MovieNext 
                    onClick={handleNextClick}
                    className="moviegen__next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </MovieNext>
            </MovieGenList>
        </MovieGenWrapper>
    )
}