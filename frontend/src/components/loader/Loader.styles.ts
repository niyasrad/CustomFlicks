import { motion } from "framer-motion";
import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.background};
    transition: 0.3s all ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoaderLogo = styled(motion.img)`
    width: 50%;
    max-width: 10rem;
    margin: auto;
    object-fit: contain;
`