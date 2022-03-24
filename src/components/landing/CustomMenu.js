import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fetchProduct } from '../../helpers/fetchProduct'
import { productsUrl } from '../../helpers/producsUrl'
import { DivOptions } from '../../styles/styledComponents/LandingStyles'
import { ButtonLogin } from '../../styles/styledComponents/LoginStyled'
import CardMenu from './CardMenu'


const CustomMenu = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchProduct(productsUrl)
            .then(data => setData(data))
    }, [])

    console.log('Estoy en data', data);


    return (
        <DivOptions >CustomMenuxz
            <Container className='titleMenu'>
                <h4>Menú Personalizado</h4>
            </Container>
            <Container style={{ backgroundColor:'red' }}>
                <CardMenu data={data}/>
            </Container> 
            <Container>
                ver mas..
            </Container>
            <Container style={{ backgroundColor: 'blue', width: '50%' }}>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <ButtonLogin> Login </ButtonLogin>
                </Link >
                <Link to='/register' style={{ textDecoration: 'none' }}>
                    <ButtonLogin> Registro </ButtonLogin>
                </Link >
            </Container>
        </DivOptions>
    )
}

export default CustomMenu