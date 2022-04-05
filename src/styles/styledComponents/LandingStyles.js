import { Button, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { VerdeLima } from "./ColoresEstilos";

// Logo
export const DivLogo = styled.div`
  background-color: #c9e265;
  height: 80%; //ser auto 
  display: inline;
  /* flex-direction: column;
  justify-content: center; */
`;

export const ImgCol = styled(Col)`
  background-color: aquamarine;
`;

export const ImgLogo = styled.img`
  display: block;
  margin: 0px auto 0px;
  padding-top: 2.5rem;
  width: 50%;
  background-color: red;
  @media only screen and (max-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

export const ButtonLogo = styled(Button)`
  background-color: #ff5757;
  color: #ffffff;
  border: none;
  width: 15%;
  min-width: 180px;
  width: 90%;
  font-size: 20px;
  display: block;
  padding: 0.3rem;
  margin: 2rem auto 0px;
  text-align: center;
  max-width: 350px;
  &:hover {
    background-color: #008037;
    color: #ffffff;
  }
  &:focus {
    outline: none;
    background-color: #ff5757;
    color: #ffffff;
  }
`;

// Welcome
export const WelcomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  img{
    width: 100%;
    height: auto;
    background-repeat: repeat;
    background-position: center;
    background-size: contain;
  }
  .titleWelcome {
    margin: 0px auto 0px;
  }
  background-color: ${VerdeLima};
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 600px) {
    .TextWelcome {
      width: 80%;
      margin: 5rem auto 6rem;
    }
  }
`;

export const NextButton = styled(Button)`
  background-color: #ff5757;
  color: #ffffff;
  border: none;
  width: 15%;
  min-width: 180px;
  font-size: 17px;
  display: block;
  margin: 2rem auto 0px;
  text-align: center;

  &:hover {
    background-color: #008037;
    color: #ffffff;
  }
  &:focus {
    outline: none;
    background-color: #ff5757;
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

  @media only screen and (max-width: 600px) {
    .TextWelcome {
      width: 80%;
      margin: 5rem auto 6rem;
    }
  }
`;

//Custom Menu
export const DivOptions = styled.div`
  height: 100vh;
  .titleMenu {
    background-image: url(https://res.cloudinary.com/david-b/image/upload/v1648067424/AG/demoday/vegetables_1_hgzxx2.svg);
    text-align: center;
    height: 86px;
  }

  .cardTitle {
    background-color: green;
  }
  @media only screen and (max-width: 610px) {
    padding-top: 2.5rem;
    height: auto;
  }
`;
