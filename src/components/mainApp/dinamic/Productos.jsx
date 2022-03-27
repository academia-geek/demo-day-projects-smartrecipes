import React from 'react'
import { useSelector } from 'react-redux'
import ListaProductos from '../../afterLogin/listaProductos/ListaProductos'
import CardMenu from '../../landing/CardMenu'

const Productos = () => {
  // const {productos}= useSelector(store => store.add)
  return (
  //  <CardMenu data={productos}/>
  <ListaProductos/>
  )
}

export default Productos