import axios from "axios";
import { useEffect, useState } from "react";

export enum Genres {
    HORROR = 27,
    ROMANCE = 10749,
    ACTION = 28,
    COMEDY = 35,
    ADVENTURE = 12,
    ANIMATION = 16,
    CRIME = 80,
    DOCUMENTARY = 99,
    DRAMA = 18,
    FAMILY = 10751,
    FANTASY = 14,
    HISTORY = 36,
    MUSIC = 10402,
    MYSTERY = 9648,
    SCIFI = 878,
    TV = 10770,
    THRILLER = 53,
    WAR = 10752,
    WESTERN = 37
}

export const GenreNames: Record<Genres, string> = {
    [Genres.HORROR]: "Horror",
    [Genres.ROMANCE]: "Romance",
    [Genres.ACTION]: "Action",
    [Genres.COMEDY]: "Comedy",
    [Genres.ADVENTURE]: "Adventure",
    [Genres.ANIMATION]: "Animation",
    [Genres.CRIME]: "Crime",
    [Genres.DOCUMENTARY]: "Documentary",
    [Genres.DRAMA]: "Drama",
    [Genres.FAMILY]: "Family",
    [Genres.FANTASY]: "Fantasy",
    [Genres.HISTORY]: "History",
    [Genres.MUSIC]: "Music",
    [Genres.MYSTERY]: "Mystery",
    [Genres.SCIFI]: 'Sci-Fi',
    [Genres.TV]: "TV Movies",
    [Genres.THRILLER]: "Thriller",
    [Genres.WAR]: "War",
    [Genres.WESTERN]: "Western"
}

export interface MovieInformation {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface MovieQuery {
    api_key: string,
    watch_region: string,
    with_watch_providers: string,
    with_genres?: Genres
}

export function useMovies(genre: Genres | null) {

    const [data, setData] = useState<null | Array<MovieInformation>>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const queryParams: MovieQuery = {
        api_key: import.meta.env.VITE_API_KEY,
        watch_region: 'US',
        with_watch_providers: 'Netflix'
    }

    if (genre) {
        queryParams.with_genres = genre
    }

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: queryParams
        })
        .then((res) => {
            setData(res.data.results)
        })
        .catch((err) => {
            setError(err.data)
        })
        .finally(() => {
            setIsLoading(false)
        })

    }, [])

    return { data, isLoading, error }

}