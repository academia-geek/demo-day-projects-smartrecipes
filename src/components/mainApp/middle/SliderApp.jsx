import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ButtonCarousel, CarouselStyled, colorPrimerBloque, colorSegundoBloque, colorTercerBloque, SliderItem, } from '../../../styles/styledComponents/SlyderStyled'

const SliderApp = () => {

  const navigate = useNavigate()

  const handleClickBlog = () => {
    console.log('click');
    navigate('/blog')
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
            <h3>Ir al blog</h3>
            <p>Top 5 Más economicas</p>
            <ButtonCarousel onClick={() => handleClickBlog()}>click</ButtonCarousel>
          </Carousel.Caption>
        </SliderItem>
        <SliderItem backgroundcolor={colorSegundoBloque}>
          <img
            className="d-block w-100 imgCarousel"
            src="https://res.cloudinary.com/david-b/image/upload/v1648664078/sliderCurve_d0znp8.svg"
            alt="second slide"
          />
          <Carousel.Caption>
            <h3>Ir al Blog</h3>
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
            <h3>¿Conocías estos productos? </h3>
            <p>Conoce sus beneficios</p>
            <ButtonCarousel className='btnPink'>click</ButtonCarousel>
          </Carousel.Caption>
        </SliderItem>
      </CarouselStyled>
  )
}

export default SliderApp