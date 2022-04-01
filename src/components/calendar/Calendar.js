import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { FiCalendar } from "react-icons/fi";
import {
  DivInformation,
  DivMonth,
  DivWeekly,
  SubTitleCal,
  TitleCalendar,
} from "../../styles/styledComponents/CalendarStyled";
import { urlRA, urlRC, urlRD } from "../../utilities/urlRecipes";
import AlmuerzoCard from "./AlmuerzoCard";
import CenaCard from "./CenaCard";
import DesayunoCard from "./DesayunoCard";

const Calendar = () => {
  const [almuerzo, setAlmuerzos] = useState([]);
  const [desayuno, setDesayuno] = useState([]);
  const [cena, setCena] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [superRecipes, setSuperRecipes] = useState([]);
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

  return (
    <div>
      <TitleCalendar>
        {" "}
        Calendario <FiCalendar />{" "}
      </TitleCalendar>
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
    </div>
  );
};

export default Calendar;

const AccordionItemFunc = (index, dia, objRecetas) => {
  let stringIndex = index.toString();
  return (
    <Accordion.Item eventKey={stringIndex} key={index}>
      <Accordion.Header> {dia} </Accordion.Header>
      <Accordion.Body>
        <h2>DESAYUNO 🥞🥞🥞</h2>
        <DesayunoCard dish={objRecetas.desayuno[index]} />
        <h2>ALMUERZO 🍕🍕🍕</h2>
        <AlmuerzoCard dish={objRecetas.almuerzo[index]} />
        <h2>CENA 🍝🍝🍝</h2>
        <CenaCard dish={objRecetas.cena[index]} />
      </Accordion.Body>
    </Accordion.Item>
  );
};
