import { styled } from "styled-components";

export const ProfileWrapper = styled.div`
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

export const ProfileMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50rem;
    height: auto;
    max-width: 90%;
    margin: auto;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow:  0px 4px 20px 0px ${ props => props.theme.primary };
    background-color: black;

    @media only screen and (max-width: 990px) {
        flex-direction: column;
    }
`

export const ProfileData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 4rem;
    box-sizing: border-box;
    width: 50%;

    @media only screen and (max-width: 990px) {
        width: 100%;
    }
`

export const ProfilerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 2rem;
    width: 20rem;
    max-width: 100%;

    p {
        color: white;
    }
    
    h4 {
        color: ${ props => props.theme.primary };
        font-size: 2em;
    }

    img {
        width: 6rem;
        height: 6rem;
    }
`