import React, { useEffect, useState } from 'react'
import { productsUrl } from '../../../../helpers/producsUrl'

import SeguimientoPrecios from '../seguimientoPrecios/SeguimientoPrecios'

const ContainerPagPrincipal = () => {
  const [data, setData] = useState([]);

  const products = async () => {
    const res = await fetch(productsUrl)
    const json = await res.json()
    console.log('haciendo')
    setData(json)
  }
  useEffect(()=> {
    const wait = async () => {
     await products()
    }
    wait()
  },[])
  return  <SeguimientoPrecios data={data}/>

  
}

export default ContainerPagPrincipal