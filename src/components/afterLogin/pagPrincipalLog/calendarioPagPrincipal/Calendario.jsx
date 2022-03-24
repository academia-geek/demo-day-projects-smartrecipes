import React, { useState } from 'react'
import { CalendarioStyled } from '../../../../styles/styledComponents/PagPrincipalStyles'
// import Calendar from 'react-calendar'

const Calendario = () => {
  // const [value, onChange] = useState(new Date());
  
  return (
    <CalendarioStyled>
      {/* <Calendar showNavigation={false} onChange={onChange} value={value} /> */}
      <p>No tienes recetas agregadas para esta semana</p>
    </CalendarioStyled>
  )
}

export default Calendario