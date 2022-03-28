import React, { useEffect, useState } from 'react'
import { urlbdr } from '../../utilities/urlRecipes';
import { Card } from "react-bootstrap";
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { BiTimer } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { ColReceta, DivCard, Img, TitleRecetas } from '../../styles/styledComponents/RecipesStyle';
import NavBarRecipes from './NavBarRecipes';
import Modal from '../../Modal';

const RecetasRecomendadas = () => {
  const [platos, setPlatos] = useState([]);
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  }

  useEffect(() => {
    async function fetchData() {
      const dataServer = await axios.get(urlbdr);
        console.log(dataServer.data)
      setPlatos(dataServer.data)
  }
  fetchData()
  }, [])

  return (
  <>
    <TitleRecetas>Recetas Recomendadas</TitleRecetas>

<Row xs={1} md={2} className="g-4">
{platos.map((dish, i) => (
  <ColReceta>
    <DivCard key={`menu-${i}`} >
      <Img variant="top" src={dish.image} className="card-menu-img"/>
      <DropdownButton align="center" variant="light" title="Información de la receta: ">
        <Card.Body>
          <Card.Title>{dish.label}</Card.Title>
          <Card.Text>
            Tipo de plato: {dish.dishType}
            <br/>
            Pertenece a la cocina: {dish.cuisineType}
            <br/>
          </Card.Text>
          <div>
          <BiTimer /> {dish.time}  <BsFillPersonFill /> {dish.porciones}
          </div>
        </Card.Body>

        <Card.Body>
        <strong>Datos nutricionales:</strong>
        <br/>
          Calorias: {dish.calories}
          <DropdownButton align="center" variant="light" title="Libre de: ">
        {dish.healthLabels !== undefined && dish.healthLabels.map((each,i) => {
          return (
            <p>{each}</p>
          )
        })}
      </DropdownButton>     
        {dish.cautions !== undefined && dish.cautions.map((each,i) => {
            return (
              <div>
                <p>Puede contener: </p>
                <p>{each}</p>
              </div>
            )
          })}
      </Card.Body>
    </DropdownButton> 
    <button onClick={toggle}>
          Abrir Detalles de la Receta
    </button>
    <Modal active={active} toggle={toggle}>
      {dish.label}
      <DropdownButton align="center" variant="light" title="Ingredientes">
          {dish.ingredientLines !== undefined && dish.ingredientLines.map((each,i) => {
            return (
              <Dropdown.Item href="#action/3.i" key={`item-${i}`}>{each}</Dropdown.Item>
            )
          })}
        </DropdownButton> 
    </Modal>
    </DivCard>
  </ColReceta>
))}
</Row>

<NavBarRecipes/>

</>


)
}

export default RecetasRecomendadas