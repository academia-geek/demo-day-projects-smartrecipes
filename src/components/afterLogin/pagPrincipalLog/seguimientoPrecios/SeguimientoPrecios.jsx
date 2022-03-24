import React from "react";

import {
  ContainerImage,
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
              <ContainerImage>
              <img alt="producto1" src={producto.img}></img>
              <p className="bottom-right">{producto.price}</p>
              </ContainerImage>
              <p>{producto.name}</p>              
            </ProductoStyled>
          );
        }
        return ''
      })}
      <div className="containerButton">
      <button type="button">Todos los productos</button>
      </div>
    </SeguimientoPreciosStyled>
  );
};

export default SeguimientoPrecios;
