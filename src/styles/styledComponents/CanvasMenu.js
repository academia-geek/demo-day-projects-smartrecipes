import { Button } from "react-bootstrap";
import styled from "styled-components";


export const CanvasButton = styled(Button)`
    display: block;
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