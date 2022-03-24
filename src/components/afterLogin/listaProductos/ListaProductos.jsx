import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../pagPrincipalLog/header/Header'
import SeguimientoPrecios from '../pagPrincipalLog/seguimientoPrecios/SeguimientoPrecios'

const ListaProductos = () => {
  const location = useLocation()
  const data = location.state
  return (
    <>
      <Header/>
      <SeguimientoPrecios data={data} limit={20}/>
    </>
  )
}

export default ListaProductos