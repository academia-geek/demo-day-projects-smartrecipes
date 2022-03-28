import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  ContainerImage,
  ProductoStyled,
  SeguimientoPreciosStyled,
} from "../../../../styles/styledComponents/PagPrincipalStyles";

const SeguimientoPrecios = ({ limit }) => {
  const { productos } = useSelector((store) => store.add);
  // iterate object

  return (
    <SeguimientoPreciosStyled>
      {
        productos.map((producto, index) => {
          
          if (index < limit) {
            return (
              <ProductoStyled key={index}>
                <ContainerImage>
                  <img alt="producto1" src={producto.data.img}></img>
                  <p className="bottom-right">{producto.data.price}</p>
                </ContainerImage>
                <p>{producto.data.name}</p>
              </ProductoStyled>
            );
          }
          return "";
        })}
      <div className="containerButton">
        <Link to="/productos" state={productos}>
          <button type="button">Todos los productos</button>
        </Link>
      </div>
    </SeguimientoPreciosStyled>
  );
};

export default SeguimientoPrecios;
