import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { CardText, CardZonaSocial, ContainerSeccionChef, ContainerTextoReceta, ImgUsuario, ImgZonaSocial, TextoReceta, TitleRecetas } from '../../styles/styledComponents/RecipesStyle';
import { urlsocial } from '../../utilities/urlRecipes';
import NavBarRecipes from './NavBarRecipes'

const ZonaSocialRecetas = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
      async function fetchData() {
          const dataServer = await axios.get(urlsocial);
            console.log(dataServer.data)
          setSocial(dataServer.data)
      }
      fetchData()
  }, [])
  
  return (
    <ContainerSeccionChef>
      <TitleRecetas>Mira lo que comparten otros usuarios</TitleRecetas>

      {social.map((dish, i) => (
      <div key={`menu-${i}`} >              
          <CardZonaSocial>
            <ImgZonaSocial src={dish.image} />
            <Card.Body>
              <Card.Title><strong>{dish.title}</strong></Card.Title>
              <CardText>
                <ImgUsuario src={dish.imageUser} />
                <ContainerTextoReceta>
                  <TextoReceta>{dish.summary}</TextoReceta>
                </ContainerTextoReceta>
              </CardText>
            </Card.Body>
          </CardZonaSocial>
      </div>
        )
        )}

<NavBarRecipes/>
    </ContainerSeccionChef>
  )
}

export default ZonaSocialRecetas;