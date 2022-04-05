import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFunctionalCurrentWatchableObject } from "../../../../redux/action/actionFuntional";

import {
  ProductoStyled,
  SeguimientoPreciosStyled,
} from "../../../../styles/styledComponents/PagPrincipalStyles";

const SeguimientoPrecios = ({ limit }) => {
  const dispatch = useDispatch();
  const { productos:{merqueo,jumbo}, activeLook } = useSelector(store => store.add);

  const isActive = () => {   
    return activeLook === "merqueo";
  };  
  // empiza vacia
  const { productosBusqueda } = useSelector((store) => store.add);
  // iterate object
  const activeProducts =
    productosBusqueda !== "undefined" && productosBusqueda.length > 0
      ? productosBusqueda : isActive() ? merqueo : jumbo;
  const handleCurrentProduct = ({ target }) => {
    let dataId = target.getAttribute("data-id");
    const currentProduct = activeProducts.find(
      (product) => product.id === dataId
    )
    dispatch(actionFunctionalCurrentWatchableObject(currentProduct));
  };
  if (limit === undefined) {
    limit = activeProducts.length;
  }
  return (
    <>
    {merqueo.length > 0 && <SeguimientoPreciosStyled>
      {activeProducts.map((producto, index) => {
        if (index < limit) {
          return (
            <ProductoStyled
              key={index}
              data-id={producto.id}
              onClick={(e) => handleCurrentProduct(e)}>
              <img loading="lazy" alt="producto1" src={producto.data.img}/>
              <p className="dataName">{producto.data.name}</p>
              <p className="dataPrice">
                ${producto.data.price} - {producto.data.weight}
              </p>
            </ProductoStyled>
          )
        }        
      return null
      })
      
      }     
    </SeguimientoPreciosStyled>

}</>
  )
}

export default SeguimientoPrecios;
