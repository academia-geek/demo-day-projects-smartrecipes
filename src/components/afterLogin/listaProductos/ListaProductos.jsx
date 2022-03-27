import React from "react";
import { useSelector } from "react-redux";
import SeguimientoPrecios from "../pagPrincipalLog/seguimientoPrecios/SeguimientoPrecios";

const ListaProductos = () => {
  const { productos } = useSelector((store) => store.add);
  return (
    <>
      <h3>Seguimiento de precios</h3>
      <p>Productos con más variacion</p>
      <SeguimientoPrecios data={productos} limit={20} />
    </>
  );
};

export default ListaProductos;
