import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardChef, ContainerChef, ContainerSeccionChef, ContainerTitleChef, ImgChef, ImgChefReceta, SubTitleRecetas, TitleRecetas } from '../../styles/styledComponents/RecipesStyle';
import { urlchef } from '../../utilities/urlRecipes';
import NavBarRecipes from './NavBarRecipes'
import { BsPeopleFill } from "react-icons/bs";

const RecetaIndChef = () => {

  const [platoChef, setPlatoChef] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const dataServer = await axios.get(urlchef);
            console.log(dataServer.data)
            setPlatoChef(dataServer.data)
      }
      fetchData()
  }, [])
  
  return (
    <ContainerSeccionChef>
      <TitleRecetas>La receta de la semana</TitleRecetas>
      <ContainerTitleChef>
        <SubTitleRecetas>Nuestro Chef recomienda</SubTitleRecetas>
        <ImgChef src="https://res.cloudinary.com/sarapalacio01/image/upload/v1648092434/DemoDay/pexels-photo-2544829_dyjutf.webp"></ImgChef>
      </ContainerTitleChef>

      {platoChef.map((dish, i) => (
      <ContainerChef key={`menu-${i}`} >              
          <CardChef>
            <ImgChefReceta  src={dish.image} />
            <Card.Body>
              <Card.Title><strong>{dish.title}</strong></Card.Title>
              <Card.Text>
                Dieta: {dish.diets.join(', ')}
                <br/>
                Precio: $ {dish.pricePerServing} por porción - {dish.servings} <BsPeopleFill /> 
                <br/>
              </Card.Text>
            </Card.Body>
          </CardChef>
      </ContainerChef>
        )
        )}
<NavBarRecipes/>
    </ContainerSeccionChef>
  )
}

export default RecetaIndChef