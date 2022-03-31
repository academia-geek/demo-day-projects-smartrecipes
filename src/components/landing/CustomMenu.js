import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/firebaseConfig'
import { fetchProduct } from '../../helpers/fetchProduct'
import { productsUrl } from '../../helpers/producsUrl'
import { actionAdd } from '../../redux/action/actionAdd'
import { ContainerAppStyle } from '../../styles/styledComponents/ContainerApp'
import { DivOptions } from '../../styles/styledComponents/LandingStyles'
import { ButtonLogin } from '../../styles/styledComponents/LoginStyled'
import MainApp from '../mainApp/MainApp'

import CardMenu from './CardMenu'



const CustomMenu =  () => {
    const dispatch = useDispatch()
    
    const [loading, setLoading] = useState(true)	
    const getFromFirebase = async () => {

        const querySnapshot = await getDocs(collection(db, "dataprecios/Bogota/precios"));

        querySnapshot.forEach((doc) => {
            productos.push({
              id: doc.id,
              data: doc.data(),
            })
          });
          dispatch(actionAdd(productos))
    }
    
    let productos = []
    

    useEffect(() => {
        
        getFromFirebase()       
        setLoading(false)        
    }, [])

    if(loading){
        return (<h1>Cargando</h1> )
    }
   


    return (
        <>
     
        <MainApp/>
    
        {/*         
        <DivOptions >
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
        </DivOptions> */}
        </>
    )
}

export default CustomMenu