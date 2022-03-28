import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddCiudad } from '../../../redux/action/actionAdd'
import ListaProductos from '../../afterLogin/listaProductos/ListaProductos'
import CardMenu from '../../landing/CardMenu'

const Productos = () => {
  const dispatch = useDispatch()
  const {productos}= useSelector(store => store.add)
  const [loading, setLoading] = useState(true)
  const selectCity = (ciudad)=>{
    productos.map(dataCity => {
      if(dataCity.id === 'Bogota'){
        console.log('error ficticio')
      } else {
        let place = dataCity.data[0].place;
      
     let uid = dataCity.id
     let currentData= dataCity.data
    
      
         if (place.includes(ciudad)){
          console.log('ciudad encontrada')
          const sliced = Object.keys(currentData).slice(1).reduce((result, key) => {
            result[key] = currentData[key];
    
            return result;
        }, {});
    
        dispatch(actionAddCiudad(ciudad, uid, sliced))
        setLoading(false)
        }

      }    
 
    return dataCity
    })}
 
    
  
useEffect(() => {
  selectCity('medellin')
}, [])
if(loading){
  return (<h1>Cargando</h1> )
}
  return (
  //  <CardMenu data={productos}/>
  <ListaProductos/>
  )
}

export default Productos