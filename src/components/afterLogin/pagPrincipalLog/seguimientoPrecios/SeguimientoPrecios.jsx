import React from "react";
import { Link } from "react-router-dom";

import {
  ContainerImage,
  ProductoStyled,
  SeguimientoPreciosStyled,
} from "../../../../styles/styledComponents/PagPrincipalStyles";

const SeguimientoPrecios = ({ data , limit}) => {
  
  return (
    <SeguimientoPreciosStyled>
      {data.map((producto, index) => {
        if (index < limit) {
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
      <Link to='/productos' state={data}>
      <button type="button">Todos los productos</button>
      </Link>
      </div>
    </SeguimientoPreciosStyled>
  );
};

export default SeguimientoPrecios;
