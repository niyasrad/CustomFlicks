import { DayRecDetails, DayRecWrapper, GenreName } from "./DayRec.styles";

export function RecGenre({ genre }: { genre: string }) {
    return (
        <GenreName>
            <p>{genre}</p>
        </GenreName>
    )
}

interface RecResponse {
    title: string;
    desc: string;
    genres: Array<string>;
    poster: string;
    redir: string;
}

const sampleResponse: RecResponse = {
    title: "SINISTER 2",
    desc: "Courtney Collins, a young mother, and her twin sons move into a haunted rural house and start experiencing a string of supernatural occurrences linked with the demon Bughuul.",
    genres: ['Horror', 'Fun', 'Raunchy'],
    poster: "https://images7.alphacoders.com/614/614609.jpg",
    redir: "https://www.youtube.com/watch?v=fChx_YZUAR0"
}

export default function DayRec() {

    return (
        <DayRecWrapper>
            <img
                src={sampleResponse.poster}
                alt="Movie Poster"
            />
            <DayRecDetails>
                <div className="dayrec__link">
                    <h6>CF Recommends</h6>
                    <a 
                        href={sampleResponse.redir}
                        target="_blank"
                    >
                        <button>WATCH</button>
                    </a>
                </div>
                <div>
                    <h4>{sampleResponse.title}</h4>
                    <p>{sampleResponse.desc}</p>
                </div>
                <div>
                    <h6>Genres</h6>
                    <div className="dayrec__genres">
                        { sampleResponse.genres.map((genre: string) => <RecGenre genre={genre} />) }
                    </div>
                </div>

            </DayRecDetails>
        </DayRecWrapper>
    )
}