import React from "react";
import { useSelector } from "react-redux";
import SeguimientoPrecios from "../pagPrincipalLog/seguimientoPrecios/SeguimientoPrecios";

const ListaProductos = () => {
  const {city} = useSelector(store => store.funtional)
  return (
    <>
      <h3>Seguimiento de precios</h3>
      <p>Ciudad : <strong>{city}</strong></p>
      <p>Productos con más variacion</p>
      <SeguimientoPrecios />
    </>
  );
};

export default ListaProductos;
