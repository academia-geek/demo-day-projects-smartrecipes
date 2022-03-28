import React, { useEffect, useState } from "react";
import { productsUrl } from "../../../../helpers/producsUrl";
import MainApp from "../../../mainApp/MainApp";
import BotonPerfilUser from "../botonPerfilUsuario/BotonPerfilUser";
import Calendario from "../calendarioPagPrincipal/Calendario";

import Header from "../header/Header";

import SeguimientoPrecios from "../seguimientoPrecios/SeguimientoPrecios";

const ContainerPagPrincipal = () => {
  const [data, setData] = useState([]);
// 
//   const products = async () => {
//     const res = await fetch(productsUrl);
//     const json = await res.json();
//     console.log("haciendo");
//     setData(json);
//   };
  // useEffect(() => {
  //   const wait = async () => {
  //     await products();
  //   };
  //   wait();
  // }, []);
  return (
    <>
      {/* <Header />
      <SeguimientoPrecios data={data} limit={3}/>
      <BotonPerfilUser/>
      <Calendario/> */}
      <MainApp/>
    </>
  );
};

export default ContainerPagPrincipal;
