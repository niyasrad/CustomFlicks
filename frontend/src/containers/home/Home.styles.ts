import { styled } from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 2rem 0rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: ${ props => props.theme.background };
`

export const HomeMovies = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`