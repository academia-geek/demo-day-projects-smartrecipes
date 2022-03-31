import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { urlRA } from '../../utilities/urlRecipes';

const AlmuerzoCard = () => {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const dataServer = await axios.get(urlRA);
                console.log(dataServer.data)
            setDishes(dataServer.data)
        }
        fetchData()
    }, [])

    console.log()

  return (
    <div>
      
      {dishes.map((dish, i) => (
        <div key={`dish-${i}`} >
                <Card className="container-card">
                    {/* <Card.Img variant="top" src={dish.image} className="imagen-menu-card" /> */}
                    <Card.Body className="body-menu-card">
                        <Card.Title className="title-menu">{dish.title}</Card.Title>
                        <Card.Text>
                            Preparation Time: {dish.readyInMinutes}' 
                            <br/>
                           
                            Diet type: {dish.diets.join(', ')}
                            <br/>
                        </Card.Text>
                      
                    </Card.Body>
                </Card>      

        </div>
      ))}

    </div>
  )
}

export default AlmuerzoCard