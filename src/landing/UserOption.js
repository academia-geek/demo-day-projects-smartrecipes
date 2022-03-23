import React from 'react'
import { Link } from 'react-router-dom'
import { NextButton, OptionsContainer } from '../styles/styledComponents/LandingStyles'

const UserOption = () => {
  return (
    <div>
        <OptionsContainer>
            <h2 className='TitleOptions'>Que opciones deseas ver</h2>
            <h4 className='SubtitleOptions'>Planeacion de comidas</h4>
            <h4 className='SubtitleOptions'>Ver nuevas recetas</h4>
            <h4 className='SubtitleOptions'>Seguimiento de precios</h4>  
        </OptionsContainer>
        <Link to='/u-select' style={{ textDecoration: 'none' }}>
            <NextButton>Siguiente </NextButton>
        </Link>
    </div>
  )
}

export default UserOption