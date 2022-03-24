import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ButtonLogo, DivLogo, ImgLogo } from '../../styles/styledComponents/LandingStyles'


const Logo = () => {
  return (
    <DivLogo>
        <Container fluid className='logoContainer'>
            <ImgLogo
                src='https://res.cloudinary.com/david-b/image/upload/v1648052111/AG/demoday/Group_17_epsd1a.png'
            />
            <Link to='/welcome' style={{ textDecoration: 'none' }}>
                <ButtonLogo>Siguiente</ButtonLogo>
            </Link>
        </Container>
        
    </DivLogo>
  )
}

export default Logo