import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebaseConfig";
import { actionAdd, changeActiveView } from "../../../redux/action/actionAdd";
import { ContainerMainProductos } from "../../../styles/styledComponents/ContainerMainProductos";
import SeguimientoPrecios from "../pagPrincipalLog/seguimientoPrecios/SeguimientoPrecios";

const ListaProductos = () => {  
  const {city, path} = useSelector(store => store.funtional)
  const {activeLook} = useSelector(store => store.add)
  const dispatch = useDispatch();  
  const getFromFirebaseJumbo = async () => {
    const initialCompany = 'jumbo'
    if(localStorage.getItem(`productos${path}${initialCompany}`) === null){
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
    dispatch(actionAdd(productos,initialCompany));
    dispatch(changeActiveView(initialCompany))
  } else {
    productos = JSON.parse(localStorage.getItem(`productos${path}${initialCompany}`));
    dispatch(actionAdd(productos,initialCompany));
    dispatch(changeActiveView(initialCompany))
  }
  };
  let productos = [];
  const handleJumbo = () => {
    getFromFirebaseJumbo();    
  }
  const handleMerqueo = () => {
    dispatch(changeActiveView('merqueo'));
  }
    
  return (
    <ContainerMainProductos>
      <h3>Seguimiento de precios</h3>
      <p>Empresa : {activeLook}</p>
      <p>Ciudad : <strong>{city}</strong></p>
      <div className="containerButton">        
        <button type="button">Todos los productos</button>
       
      <p>Productos con más variacion</p>
      
      </div>
      <button onClick={() => handleMerqueo()}>Merqueo</button>
      <button onClick={()=>handleJumbo()}>Jumbo</button>
      <SeguimientoPrecios />
    </ContainerMainProductos>
  );
};

export default ListaProductos;
