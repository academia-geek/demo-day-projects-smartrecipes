import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ButtonCarousel, CarouselStyled, colorPrimerBloque, colorSegundoBloque, colorTercerBloque, SliderItem, SliderItem2, SliderItem3 } from '../../../styles/styledComponents/SlyderStyled'

const SliderApp = () => {

  const navigate = useNavigate()

  const handleClickSlider = () => {
    console.log('click');
    navigate('/welcome')
  }

  return (

      <CarouselStyled >
        <SliderItem backgroundcolor={colorPrimerBloque}>
          <img
            className="d-block w-100 imgCarousel"
            src="https://res.cloudinary.com/david-b/image/upload/v1648664078/sliderCurve_d0znp8.svg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Alimentate mejor con estos productos</h3>
            <p>Top 5 Más economicas</p>
            <ButtonCarousel onClick={handleClickSlider}>click</ButtonCarousel>
          </Carousel.Caption>
        </SliderItem>
        <SliderItem backgroundcolor={colorSegundoBloque}>
          <img
            className="d-block w-100 imgCarousel"
            src="https://res.cloudinary.com/david-b/image/upload/v1648664078/sliderCurve_d0znp8.svg"
            alt="second slide"
          />
          <Carousel.Caption>
            <h3>Tu calendario para esta semana</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ButtonCarousel>click</ButtonCarousel>
          </Carousel.Caption>
        </SliderItem>
        <SliderItem backgroundcolor={colorTercerBloque}>
          <img
            className="d-block w-100 imgCarousel"
            src="https://res.cloudinary.com/david-b/image/upload/v1648664078/sliderCurve_d0znp8.svg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <ButtonCarousel className='btnPink'>click</ButtonCarousel>
          </Carousel.Caption>
        </SliderItem>
      </CarouselStyled>
  )
}

export default SliderApp