import { styled } from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding-top: 2rem;
    background-color: ${ props => props.theme.background };
`