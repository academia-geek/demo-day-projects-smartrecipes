import React from 'react'
import { useState } from 'react'
import CardReceta from './CardReceta'
import UseFetch from './UseFetch'

const RecetasInicio = () => {
    const [url, setUrl] = useState('https://recetas-demoday.herokuapp.com/recetas')
    const estado = UseFetch(url);
    const {cargando, dataServer} = estado
    cargando? console.log('cargando...'):console.log(dataServer)

  return (
    <>
      {
        cargando
        ?
        <h2>Cargando las recetas...</h2>
        :
        <CardReceta dataServer={dataServer} />
        
      }
    </>
  )
}

export default RecetasInicio