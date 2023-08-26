import MoviePoster from '../../assets/MoviePoster.jpeg'

export interface MovieGenInterface {
    title: string;
    img: string;
}

export const moviesList: Array<MovieGenInterface> = [
    {
        title: "Sinister",
        img: MoviePoster
    },
    {
        title: "The Nun",
        img: MoviePoster
    },
    {
        title: "Sinister 2",
        img: MoviePoster
    },
    {
        title: "Conjuring",
        img: MoviePoster
    },
    {
        title: "Annebelle",
        img: MoviePoster
    },
    {
        title: "Sadako",
        img: MoviePoster
    },
    {
        title: "E.T.",
        img: MoviePoster
    }
]