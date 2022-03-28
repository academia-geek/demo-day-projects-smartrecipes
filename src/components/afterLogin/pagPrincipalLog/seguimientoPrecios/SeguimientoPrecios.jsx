import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  ContainerImage,
  ProductoStyled,
  SeguimientoPreciosStyled,
} from "../../../../styles/styledComponents/PagPrincipalStyles";

const SeguimientoPrecios = ({limit}) => {
  const {productosCiudad : {productos}} = useSelector(store => store.add);
  // iterate object
 Object.values(productos).map(data => {
   return'';
  });
  return (
    <SeguimientoPreciosStyled>
      
      {productos !== undefined && Object.values(productos).map((producto, index) => {
        
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
      <Link to='/productos' state={productos}>
      <button type="button">Todos los productos</button>
      </Link>
      </div>
    </SeguimientoPreciosStyled>
  );
};

export default SeguimientoPrecios;
