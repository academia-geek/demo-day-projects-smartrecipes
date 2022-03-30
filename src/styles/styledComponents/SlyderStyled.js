import { Button, Carousel, CarouselItem } from "react-bootstrap";
import styled from "styled-components";

export const SliderStyled = styled.div`
  height: 500px;
  background-color: green;
  border-radius: 24px;
  border: 1px solid red;
`

export const CarouselStyled = styled(Carousel)`
    border-radius:5px;

    .imgCarousel {
        opacity: 0.3;
    }
    .btnPink {
        background-color: #EB763C;
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
    background-color: #1AA928;
    border-radius:5px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 280px;
    }
`;

export const SliderItem2 = styled(CarouselItem)`
    background-color: #643A71;
    border-radius:5px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 280px;
    }
`;

export const SliderItem3 = styled(CarouselItem)`
    background-color: #FF5757;
    border-radius:5px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 280px;
    }
`;

export const ButtonCarousel = styled(Button)`
    background-color: #FF5757;
    color: #FFFF;
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
        background-color: #FF5757;
        color: #ffffff;
    }
    @media only screen and (max-width: 600px) {
        width: 65%;
        margin: 0px Auto 0px;
        position: relative;
        top:25px;
    }
`;