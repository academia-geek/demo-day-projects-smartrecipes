import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddCiudad } from '../../../redux/action/actionAdd'
import ListaProductos from '../../afterLogin/listaProductos/ListaProductos'
import CardMenu from '../../landing/CardMenu'

const Productos = () => {

  return (
  //  <CardMenu data={productos}/>
  <ListaProductos/>
  )
}

export default Productos