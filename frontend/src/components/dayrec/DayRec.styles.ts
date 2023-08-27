import { styled } from "styled-components";

export const DayRecWrapper = styled.div`
    width: 90%;
    padding: 3rem;
    box-sizing: border-box;
    cursor: pointer;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    border-radius: 2rem;
    background-color: black;
    box-shadow:  0px 4px 20px 0px ${ props => props.theme.primary };

    img {
        width: 100%;
        max-width: 60%;
        height: auto;
        object-fit: cover;
        border-radius: 2rem;
    }

    @media only screen and (max-width: 990px) {
        width: 85%;
        flex-direction: column;
        padding: 2rem;

        img {
            max-width: 100%;
        }
    }
`

export const DayRecDetails = styled.div`
    max-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .dayrec__link {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .dayrec__link h6 {
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

    .dayrec__link button {
        padding: 0.5rem 2rem;
        text-align: center;
        border: none;
        color: white;
        border-radius: 2rem;
        font-size: 1.1em;
        background-color: ${ props => props.theme.accentsec};
        cursor: pointer;
    }

    .dayrec__genres {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }

    h4 {
        letter-spacing: 0.2em;
        word-break: keep-all;
        padding-top: 1rem;
        color: white;
        font-size: 1.3em;
        overflow: hidden;
    }

    h6 {
        color: ${ props => props.theme.primary };
        font-size: 1.1em;
    }

    p {
        color: white;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    @media only screen and (max-width: 990px) {
        max-width: 100%;

        h4 {
            font-size: 1.3em;
        }

        h6 {
            font-size: 1.1em;
            letter-spacing: 0.1em;
        }

        p {
            font-size: 0.9em;
        }
    }
`

export const GenreName = styled.div`
    width: auto;
    padding: 0.5rem 1.5rem;
    text-align: center;
    border-radius: 2rem;
    background-color: ${ props => props.theme.accentsec}80;

    p {
        color: white;
        font-size: 0.9em;
        letter-spacing: 0.1em;
    }
`