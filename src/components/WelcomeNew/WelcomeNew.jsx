import React from 'react'
import { WelcomeNewStyled } from '../../styles/styledComponents/WelcomeStyled'

const WelcomeNew = () => {
  return (
    <WelcomeNewStyled >
      <div className='title'>
        <h1>Bienvenido a SmartRecipes</h1>
      </div>
      <div className='firstText'>
        <p>Recetas inteligentes para una epoca inteligente</p>
      </div>
      <div>
      <h3>¿Qué es SmartRecipes?</h3>
        <div>
          <p>
            Monitorizamos precios de los principales provedores de mercado para sugerirte donde comprar los ingredientes
          </p>
          <img alt="girl playing with map"/>          
        </div>
        
      </div>
      <div className="brandContainers">
        <img alt="merqueo"/>
        <img alt="cornershop"/>
        <img alt="jumbo"/>
      </div>
      <div>
        <div>
          <img alt='Img'/>      
        </div>      
          <h2>Planea tus comidas y compras</h2>
      </div>
      <button>Continua</button>
      <img alt="incribite"/>
    </WelcomeNewStyled>
  )
}

export default WelcomeNew