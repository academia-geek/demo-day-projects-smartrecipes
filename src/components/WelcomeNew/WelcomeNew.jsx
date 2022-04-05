import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonLogin } from '../../styles/styledComponents/LoginStyled'
import { WelcomeNewStyled } from '../../styles/styledComponents/WelcomeStyled'

const WelcomeNew = () => {
  return (
    <WelcomeNewStyled >
      <div className='title'>
        <h1>Bienvenido a SmartRecipes</h1>
      </div>
      <div className='firstText'>
        <p>Recetas inteligentes para una época inteligente</p>
      </div>
      <div className='innerTitle'>
      <h3>¿Qué es SmartRecipes?</h3>
      </div>
        <div className='firstBlock'>
          <div className='imgContainer'>
          <img alt="mercados" src='https://res.cloudinary.com/davidcharif/image/upload/v1648820706/demoFakeApi/Group_88_p08peo.png' loading='lazy'/>          
          </div>
          <div className='textContainer'>
          <p>
            Monitorizamos precios de los principales provedores de mercado en varias ciudades del país para sugerirte donde comprar los ingredientes
          </p>
          </div>
        </div>
        
     
      <div className="brandContainers">
        <img alt="merqueo" src='https://res.cloudinary.com/davidcharif/image/upload/v1648820705/demoFakeApi/Merqueo-PW_1_lntogc.png' />
        <img alt="cornershop" src='https://res.cloudinary.com/davidcharif/image/upload/v1648820706/demoFakeApi/logoCorner_1_r8nl9e.png'/>
        <img alt="jumbo" src='https://res.cloudinary.com/davidcharif/image/upload/v1648820705/demoFakeApi/Group_89_kdobtl.png' />
      </div>
      <div className='secondBlock'>
        <div className='textContainer'>
          <p>
            Te sugerimos recetas acordes a tu estilo de vida, tus preferencias y tus intereses.
            ¡Prueba cosas nuevas y diferentes!
          </p>
        </div>
          <div className='imgContainer'>
            <img alt='girl' src='https://res.cloudinary.com/davidcharif/image/upload/v1648820705/demoFakeApi/Plan--5ec7b84e01d0360018d4c0e8_eiyizw.png'/>
          </div>
      </div>
      <div className='thirdBlock'>
        <div className='imgContainer'>
          <img alt='Img'src='https://res.cloudinary.com/davidcharif/image/upload/v1648315820/demoFakeApi/imagenSideBar_brl1vb.png'/>      
        </div>   
        <div className='textContainer'>   
          <p>Disfruta tu experiencia!</p>
        </div>
      </div>
      <Link to='/home'>
      <ButtonLogin><p>Continua</p></ButtonLogin>
      </Link>
      <img alt="incribite"/>
    </WelcomeNewStyled>
  )
}

export default WelcomeNew