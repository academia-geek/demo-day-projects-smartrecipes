import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonLogo, WelcomeContainer } from '../../styles/styledComponents/LandingStyles'


const Welcome = () => {
  return (
    <>
        <WelcomeContainer>
            <img src='https://res.cloudinary.com/davidcharif/image/upload/v1648749467/demoFakeApi/Dashboard_vxytry.png' alt='logo' 
            loading='lazy'
            />   
        <Link to='/u-select' style={{ textDecoration: 'none' }}>
            <ButtonLogo>Siguiente</ButtonLogo>
        </Link>
        </WelcomeContainer>
    </>
  )
}

export default Welcome