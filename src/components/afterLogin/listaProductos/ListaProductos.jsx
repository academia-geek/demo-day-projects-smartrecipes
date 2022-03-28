import React from "react";
import { useSelector } from "react-redux";
import SeguimientoPrecios from "../pagPrincipalLog/seguimientoPrecios/SeguimientoPrecios";

const ListaProductos = () => {
  
  return (
    <>
      <h3>Seguimiento de precios</h3>
      {/* <p>Ciudad : <strong>{ciudad}</strong></p> */}
      <p>Productos con más variacion</p>
      <SeguimientoPrecios limit={20} />
    </>
  );
};

export default ListaProductos;
