import React from "react";

import {
  ProductoStyled,
  SeguimientoPreciosStyled,
} from "../../../../styles/styledComponents/PagPrincipalStyles";

const SeguimientoPrecios = ({ data }) => {
  return (
    <SeguimientoPreciosStyled>
      {data.map((producto, index) => {
        if (index < 3) {
          return (
            <ProductoStyled key={index}>
              <img alt="producto1" src={producto.img}></img>
              <p>{producto.name}</p>
            </ProductoStyled>
          );
        }
        return ''
      })}
    </SeguimientoPreciosStyled>
  );
};

export default SeguimientoPrecios;
