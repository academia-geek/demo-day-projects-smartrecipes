import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { CalendarioStyled } from "../../../styles/styledComponents/PagPrincipalStyles";
import Header from "../pagPrincipalLog/header/Header";

const Calendario = () => {
  const [value, onChange] = useState(new Date());



  useEffect(()=> {
    console.log('value', value)
 },[value] )
  return (
    <>
      <Header />
      <CalendarioStyled>
        <Calendar onChange={onChange} value={value} />
      </CalendarioStyled>
    </>
  );
};

export default Calendario;
