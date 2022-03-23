import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ButtonLogin } from '../styles/styledComponents/LoginStyled'

const CustomMenu = () => {
    return (
        <div>CustomMenu
            <Container>
                <h4>Menú Personalizado</h4>
            </Container>
            <Container>
                cards
                
            </Container>
            <Container style={{ backgroundColor: 'blue' }}>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <ButtonLogin> Login </ButtonLogin>
                </Link >
                <Link to='/register' style={{ textDecoration: 'none' }}>
                    <ButtonLogin> Registro </ButtonLogin>
                </Link >
            </Container>
        </div>
    )
}

export default CustomMenu