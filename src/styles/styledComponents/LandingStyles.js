import { Button, Container } from "react-bootstrap";
import styled from "styled-components";

// Logo
export const DivLogo = styled.div`
    background-color: #C9E265;
    height: 100vh;
    .logoContainer {
        background-color: #C9E265;
        height: auto;
    }
    @media only screen and (max-height: 680px) {
        padding-top: 1rem;
        height: 780px;
    }
    @media only screen and (max-width: 610px) {
        padding-top: 2.5rem;
        height: 100vh;
    }
`;

export const ImgLogo = styled.img`
    display: block;
    margin: 0px auto 0px;
    padding-top: 2.5rem;
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`;

export const ButtonLogo = styled(Button)`
    background-color: #FF5757;
    color: #ffffff;
    border: none;
    width: 15%;
    min-width: 180px;
    font-size: 17px;
    display: block;
    margin: 2rem auto 0px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    &:hover {
        background-color: #008037;
        color: #ffffff;
    }
    &:focus {
        outline: none;
        background-color: #FF5757;
        color: #ffffff;
    }
    @media only screen and (max-width: 600px) {
        margin: 2.5rem auto 0px;
        width: 60%;
        min-width: 0px;
    }
    @media only screen and (min-height: 800px) {
        position: relative;
        top: 4rem;
    }
`;

// Welcome
export const WelcomeContainer = styled(Container)`
    height: 85vh;
    .TitleWelcome {
        text-align: center;
        color: #FF5757;
        margin: 2rem 0;
        padding: 2rem 0px 3rem;
        font-family: 'Roboto', sans-serif;
        font-size: 31px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .SubtitleWelcome {
        text-align: center;
        color: #FFFF;
        margin: 2rem 0;
        padding: 2rem 0px 3rem;
        font-family: 'Roboto', sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .TextWelcome {
        text-align: center;
        color: #FFFF;
        width: 50%;
        margin: 5rem auto 10rem;
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: center;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    
    @media only screen and (max-width: 600px) {
        .TextWelcome {
            width: 80%;
            margin: 5rem auto 6rem;
        }
    }
`;

export const NextButton = styled(Button)`
    background-color: #FF5757;
    color: #ffffff;
    border: none;
    width: 15%;
    min-width: 180px;
    font-size: 17px;
    display: block;
    margin: 2rem auto 0px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    &:hover {
        background-color: #008037;
        color: #ffffff;
    }
    &:focus {
        outline: none;
        background-color: #FF5757;
        color: #ffffff;
    }
    @media only screen and (max-width: 600px) {
        margin: 2.5rem auto 0px;
        width: 60%;
        min-width: 0px;
    }
`;

// UserOptions

export const OptionsContainer = styled(Container)`
    height: 85vh;
    .TitleOptions {
        text-align: center;
        color: #FF5757;
        margin: 2rem 0;
        padding: 2rem 0px 3rem;
        font-family: 'Roboto', sans-serif;
        font-size: 31px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .SubtitleOptions {
        text-align: center;
        color: #FFFF;
        margin: 2rem 0;
        padding: 2rem 0px 3rem;
        font-family: 'Roboto', sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .TextOptions {
        text-align: center;
        color: #FFFF;
        width: 50%;
        margin: 5rem auto 10rem;
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: center;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    
    @media only screen and (max-width: 600px) {
        .TextWelcome {
            width: 80%;
            margin: 5rem auto 6rem;
        }
    }
`;