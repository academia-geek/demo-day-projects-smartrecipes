import React, { useState } from "react";
import MainApp from "../../../mainApp/MainApp";


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
