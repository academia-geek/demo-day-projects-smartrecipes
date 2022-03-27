import React from 'react'
import { Link } from 'react-router-dom'
import { NextButton, WelcomeContainer } from '../../styles/styledComponents/LandingStyles'


const Welcome = () => {
  return (
    <div>
        <WelcomeContainer>
            <h2 className='TitleWelcome'>Bienvenido a SMARTRECIPES</h2>
            <h4 className='SubtitleWelcome'>Estos son nuestros beneficios...</h4>
            <p className='TextWelcome'>
                Elige  si quieres seguir precios, crear un planeador para cocinar y probar recetas, uno a la vez o todos al tiempo!
            </p>        
        </WelcomeContainer>
        <Link to='/options' style={{ textDecoration: 'none' }}>
            <NextButton>Siguiente</NextButton>
        </Link>
    </div>
  )
}

export default Welcome