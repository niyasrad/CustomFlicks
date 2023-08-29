import { motion } from "framer-motion";
import { styled } from "styled-components";

export const TopBarWrapper = styled(motion.div)`
    margin: 0 auto;
    padding: 0 3rem;
    box-sizing: border-box;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    border-radius: 2rem;
    font-weight: 400;
`

export const TopBarLeft = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    img {
        width: 5rem;
        height: 5rem;
        cursor: pointer;
    }

    p {
        font-size: 1em;
        letter-spacing: 0.2em;
        color: ${ props => props.theme.primary };
    }

    @media only screen and (max-width: 990px) {

        img {
            width: 3rem;
            height: 3rem;
        }

        p {
            display: none;
        }
    }
`

export const TopBarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    letter-spacing: 0.2em;
    font-size: 1em;

    a {
        text-decoration: none;
        color: white;
        transition: 0.3s all ease-in-out;
    }
    p {
        color: white;
        cursor: pointer;
        transition: 0.3s all ease-in-out;
    }

    svg {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }

    a:hover, p:hover {
        color: ${ props => props.theme.primary };
    }

    @media only screen and (max-width: 990px) {
        display: none;
    }
`

export const TopBarMobile = styled.div`
    display: none;

    @media only screen and (max-width: 990px) {
        display: flex;
        gap: 2rem;

        svg {
            cursor: pointer;
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`