import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  
  ProductoStyled,
  SeguimientoPreciosStyled,
} from "../../../../styles/styledComponents/PagPrincipalStyles";

const SeguimientoPrecios = ({ limit }) => {
  const { productos } = useSelector((store) => store.add);
  const {productosBusqueda} = useSelector(store => store.add)
  // iterate object
  const activeProducts =  productosBusqueda !== 'undefined' && productosBusqueda.length > 0 ? productosBusqueda : productos;
  const handleCurrentProduct = ({target}) => {
    let dataId = target.getAttribute('data-id');
    console.log('dataId', dataId)
  }

  return (
    <SeguimientoPreciosStyled>
      {
      activeProducts.map((producto, index) => {          
          if (index < limit) {
            return (
              <ProductoStyled key={index} data-id={producto.id} onClick={(e) => handleCurrentProduct(e)}>
               
                  <img alt="producto1" src={producto.data.img}></img>
              
                <p className="dataName">{producto.data.name}</p>
                  <p className="dataPrice">${producto.data.price} - {producto.data.weight}</p>
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
