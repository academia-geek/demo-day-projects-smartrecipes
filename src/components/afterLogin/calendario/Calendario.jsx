import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarioStyled } from "../../../styles/styledComponents/PagPrincipalStyles";
import Header from "../pagPrincipalLog/header/Header";

const Calendario = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Header />
      <CalendarioStyled>
        <Calendar showNavigation={false} onChange={onChange} value={value} />
      </CalendarioStyled>
    </>
  );
};

export default Calendario;
