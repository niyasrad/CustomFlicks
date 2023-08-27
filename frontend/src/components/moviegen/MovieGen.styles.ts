import { styled } from "styled-components";

export const MovieGenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: auto;
    width: 90%;

    @media only screen and (max-width: 990px) {
        width: 80%;
    }
`

export const MovieGenTitle = styled.p`
    font-size: 1.2em;
    user-select: none;
    color: ${ props => props.theme.primary };
`

export const MovieGenList = styled.div`
    position: relative;

    &::before, &::after {
        position: absolute;
        z-index: 2;
        pointer-events: none;
        content: "";
        width: 4rem;
        height: 8rem;
    }

    &::before {
        left: 0;
        background: ${props => props.theme.gradleft};
    }
    &::after {
        top: 0;
        right: 0;
        background: ${props => props.theme.gradright};
    }

    &:hover {
        .moviegen__next {
            opacity: 1;
        }
    }
`

export const MovieGenCards = styled.div`
    position: relative;
    width: auto;
    display: flex;
    gap: 2rem;
    height: 8rem;
    overflow: hidden;
    scroll-snap-type: x mandatory;
`

export const MovieCard = styled.div`
    position: relative;
    height: 6rem;
    min-width: 12rem;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 4px 11px 0px ${ props => props.theme.primary };
    transition: all 0.5s ease-in-out;
    scroll-snap-align: start;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
    }

    &:hover {
        box-shadow: 0px 4px 15px 0px ${ props => props.theme.accentsec };
    }
`

export const MovieCardTitle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    background-color: ${ props => props.theme.primary };
    opacity: 0;
    transition: all 0.5s ease-in-out;

    p {
        text-align: center;
        color: white;
        font-weight: 600;
        font-size: 1em;
        word-break: keep-all;

    } 

    &:hover {
        opacity: 1;
    }
`

export const MovieNext = styled.div`
    opacity: 0;
    position: absolute;
    right: 0;
    top: -1rem;
    bottom: 1rem;
    width: 5rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ props => props.theme.gradright };
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
    svg {
        width: 5rem;
        height: 5rem;
    }

    @media only screen and (max-width: 990px) {
        opacity: 1;

        svg {
            width: 3rem;
            height: 3rem;
        }
    }
`