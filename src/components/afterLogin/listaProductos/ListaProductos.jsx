import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase/firebaseConfig";
import { actionAdd, changeActiveView } from "../../../redux/action/actionAdd";
import { ButtonPrice, ContainerMainProductos } from "../../../styles/styledComponents/ContainerMainProductos";
import SeguimientoPrecios from "../pagPrincipalLog/seguimientoPrecios/SeguimientoPrecios";

const ListaProductos = () => {
  const { city, path } = useSelector(store => store.funtional)
  const { productos:{merqueo,jumbo}, activeLook } = useSelector(store => store.add);
  const dispatch = useDispatch();
  const getFromFirebaseJumbo = async () => {
    const initialCompany = 'jumbo'
    if (localStorage.getItem(`productos${path}${initialCompany}`) === null) {
      const querySnapshot = await getDocs(
        collection(db, `cornershop/${path}/precios-jumbo`)
      );
      querySnapshot.forEach((doc) => {
        productos.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      localStorage.setItem(`productos${path}${initialCompany}`, JSON.stringify(productos));
      dispatch(actionAdd(productos, initialCompany));
      dispatch(changeActiveView(initialCompany))
    } else {
      productos = JSON.parse(localStorage.getItem(`productos${path}${initialCompany}`));
      dispatch(actionAdd(productos, initialCompany));
      dispatch(changeActiveView(initialCompany))
    }
  };
  let productos = [];
  const valueStore = true;
  const handleJumbo = () => {
    getFromFirebaseJumbo();
  }
  const handleMerqueo = () => {
    dispatch(changeActiveView('merqueo'));
  }
  const activeCount = activeLook === 'merqueo' ? Object.values(merqueo).length : Object.values(jumbo).length;

  return (
    <ContainerMainProductos>
      <h3>Precio actual de tus ingredientes</h3>
      { city !== '' ? <>
      <p>Empresa : {activeLook}</p>
      <p>Ciudad : <strong>{city}</strong></p>
      <h5>Todos los productos</h5> 
      <p>Tenemos {activeCount} productos para comparar</p>
      <div className="containerButton">
        <ButtonPrice onClick={() => handleMerqueo()}></ButtonPrice>
        <ButtonPrice jumbo={valueStore.toString()} onClick={() => handleJumbo()}></ButtonPrice>
      </div>
      </>
      : <p>Para empezar elige una ciudad</p>
      }
      <SeguimientoPrecios />

    </ContainerMainProductos>
  );
};

export default ListaProductos;
