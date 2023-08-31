import { styled } from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme.background };
`

export const LoginContent = styled.div`
    width: 40rem;
    max-width: 90%;
    min-height: 50vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    gap: 2rem;
    padding: 3rem;
    border-radius: 2rem;
    color: white;

    img {
        width: 6rem;
        height: 6rem;
    }
`

export const LoginFieldsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    input, button {
        width: 20rem;
        max-width: 90%;
        border: none;
        height: 3rem;
    }

    input {
        background-color: ${ props => props.theme.background };
        color: white;
        border-radius: 0.5rem;
        font-size: 1em;
        padding: 1.5rem 1rem;
        box-sizing: border-box;
    }

    button {
        background-color: ${ props => props.theme.accentsec };
        color: ${ props => props.theme.primary };
        border-radius: 0.8rem;
        font-size: 1.1em;
        cursor: pointer;
    }
`