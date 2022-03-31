import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { urlRD } from '../../utilities/urlRecipes';

const DesayunoCard = ( ) => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const dataServer = await axios.get(urlRD);
                console.log(dataServer.data)
            setDishes(dataServer.data)
        }
        fetchData()
    }, [])
    console.log(dishes)

  return (
    null
  )
}

export default DesayunoCard