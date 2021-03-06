import { Button, Carousel, CarouselItem } from "react-bootstrap";
import styled from "styled-components";
import { VerdeLima } from "./ColoresEstilos";

export const colorPrimerBloque = "#1AA928";
export const colorSegundoBloque = "#643A71";
export const colorTercerBloque = "#FF5757";

export const SliderStyled = styled.div`  
  background-color: green;
  border-radius: 24px;
  border: 1px solid red;
`;

export const CarouselStyled = styled(Carousel)`
background-color: white;
  border-radius: 5px;
  padding: 20px;
  .imgCarousel {
    opacity: 0.3;
  }
  .btnPink {
    background-color: #eb763c;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    .carousel-indicators {
      justify-content: space-around;
      position: relative;
      top: 240px;
      bottom: none;
    }
  }
`;

export const SliderItem = styled(CarouselItem)`
  background-color: ${({backgroundcolor}) => backgroundcolor};
  max-height: 200px;
  border-radius: 15px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 280px;
  }
`;

export const ButtonCarousel = styled(Button)`
  background-color: #ff5757;
  color: #ffff;
  border: none;
  width: 50%;
  font-size: 15px;
  display: block;
  margin: 10px Auto 0px;
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
    width: 65%;
    margin: 0px Auto 0px;
    position: relative;
    top: 25px;
  }
`;
