import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { FiCalendar } from "react-icons/fi";

import {
  DivInformation,
  
  DivWeekly,
  SubTitleCal,
  TitleCalendar,
} from "../../styles/styledComponents/CalendarStyled";
import { ContainerCalendar } from "../../styles/styledComponents/ContainerCalendar";
import { urlRA, urlRC, urlRD } from "../../utilities/urlRecipes";
import AlmuerzoCard from "./AlmuerzoCard";
import CenaCard from "./CenaCard";
import DesayunoCard from "./DesayunoCard";


const CalendarLocal = () => {
  const [almuerzo, setAlmuerzos] = useState([]);
  const [desayuno, setDesayuno] = useState([]);
  const [cena, setCena] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [superRecipes, setSuperRecipes] = useState([]);
  console.log('superRecipes', superRecipes)
  const resetFilters = () => {
      setSuperRecipes(desayuno,almuerzo,cena)
  }    
  useEffect(() => {
    async function fetchData() {
      const dataAlmuerzo = await axios.get(urlRA);
      setAlmuerzos(dataAlmuerzo.data);
      const dataCena = await axios.get(urlRC);
      setCena(dataCena.data);
      const dataDesayuno = await axios.get(urlRD);
      setDesayuno(dataDesayuno.data);
      setSuperRecipes({
        desayuno: dataDesayuno.data,
        cena: dataCena.data,
        almuerzo: dataAlmuerzo.data,
      });
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  // retornar una sola vez el componente pero con los datos iterados

  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  //Implementar filtros de los ingredientes
  const handleVeg = () => {
    let {desayuno, cena, almuerzo} = superRecipes;
    desayuno = desayuno.filter(dish => dish.vegetarian === true);
    cena = cena.filter(dish => dish.vegetarian === true);
    almuerzo = almuerzo.filter(dish => dish.vegetarian === true);
    setSuperRecipes({
        desayuno,
        cena,
        almuerzo
    })
  }
  const handleGluten = () => {
    let {desayuno, cena, almuerzo} = superRecipes;
    desayuno = desayuno.filter(dish => dish.glutenFree === true);
    cena = cena.filter(dish => dish.glutenFree === true);
    almuerzo = almuerzo.filter(dish => dish.glutenFree === true);
    setSuperRecipes({
        desayuno,
        cena,
        almuerzo
    })
    }
const handleVegan = () => {
    let {desayuno, cena, almuerzo} = superRecipes;
    desayuno = desayuno.filter(dish => dish.vegan === true);
    cena = cena.filter(dish => dish.vegan === true);
    almuerzo = almuerzo.filter(dish => dish.vegan === true);
    setSuperRecipes({
        desayuno,
        cena,
        almuerzo
    })
    }

  return (
    <ContainerCalendar>
      <TitleCalendar>
        {" "}
        Calendario <FiCalendar />{" "}
      </TitleCalendar>
      <div>
      <button onClick={() => handleVeg()}>Filtro VEGETARIANOS</button>
      <button onClick={() => handleGluten()}>Filtro GLUTEN</button>
      <button onClick={() => handleVegan()}>Filtro VEGANOS</button>
      <button onClick={() => resetFilters()}>RESET FILTERS</button>
      </div>
      <DivWeekly>
        <SubTitleCal> Detallado Semanal </SubTitleCal>

        <Accordion defaultActiveKey="0" flush>
          {dias.map((dia, index) => {
            return AccordionItemFunc(index, dia, superRecipes);
          })}
        </Accordion>
      </DivWeekly>

      <DivInformation>
        <SubTitleCal>Detalles del menú</SubTitleCal>
      </DivInformation>
    </ContainerCalendar>
  );
};

export default CalendarLocal;

const AccordionItemFunc = (index, dia, objRecetas) => {
  let stringIndex = index.toString();  
  return (
    <Accordion.Item eventKey={stringIndex} key={index}>
      <Accordion.Header> {dia} </Accordion.Header>
      <Accordion.Body>
        <h2>DESAYUNO 🥞🥞🥞</h2>
        <DesayunoCard dish={objRecetas.desayuno[index]} />
        <p>Precio por porcion {objRecetas.desayuno[index].pricePerServing}</p>
        <p>Puntos saludables {objRecetas.desayuno[index].healthScore}</p>
        <p>Tiempo de preparacion {objRecetas.desayuno[index].readyInMinutes}</p>

        <h2>ALMUERZO 🍕🍕🍕</h2>
        <AlmuerzoCard dish={objRecetas.almuerzo[index]} />
        <p>Precio por porcion {objRecetas.almuerzo[index].pricePerServing}</p>
        <p>Puntos saludables {objRecetas.almuerzo[index].healthScore}</p>
        <p>Tiempo de preparacion {objRecetas.almuerzo[index].readyInMinutes} minutos</p>

        <h2>CENA 🍝🍝🍝</h2>
        <CenaCard dish={objRecetas.cena[index]} />
        <p>Precio por porcion {objRecetas.cena[index].pricePerServing}</p>
        <p>Puntos saludables {objRecetas.cena[index].healthScore}</p>
        <p>Tiempo de preparacion {objRecetas.cena[index].readyInMinutes} minutos</p>

      </Accordion.Body>
    </Accordion.Item>
  );
};
