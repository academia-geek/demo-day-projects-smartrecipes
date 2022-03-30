import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig";
import { actionAdd } from "../../redux/action/actionAdd";
import { actionFunctionalCiudades } from "../../redux/action/actionFuntional";

import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
import {
  ContainerAppTopStyle,
  DivFlex,
} from "../../styles/styledComponents/MainAppStyled";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import Productos from "./dinamic/Productos";
import Recetas from "./dinamic/Recetas";
import SideBar from "./middle/SideBar";

import SliderApp from "./middle/SliderApp";
import BarraBusqueda from "./top/barraBusqueda/BarraBusqueda";
import Idioma from "./top/idioma/Idioma";
import Ubicacion from "./top/ubicacion/Ubicacion";

const MainApp = () => {
  const dispatch = useDispatch();
  const { path } = useSelector((store) => store.funtional);

  const getFromFirebase = async () => {
    const querySnapshot = await getDocs(
      collection(db, `merqueo/${path}/Precios`)
    ); 

    querySnapshot.forEach((doc) => {
      productos.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    dispatch(actionAdd(productos));
    
  };
  let cities = [];
  const getCitiesFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(db, "lista"));
    querySnapshot.forEach((doc) => {
      cities.push(doc.data());
    })
    dispatch(actionFunctionalCiudades(cities))
  }

  let productos = [];
  if (path !== "") {
    getFromFirebase();
  }
  useEffect(() => {
    getCitiesFromFirebase()
  } , [])

  return (
    <>
      <ContainerAppStyle>
        <SideBarMenu cities={cities} />
        <DivFlex>
          <ContainerAppTopStyle>
            <BarraBusqueda />
            <Ubicacion />
            <Idioma />
          </ContainerAppTopStyle>
          <SliderApp />

          {path !== "" ? (
            <>
              <Productos />
              <Recetas />
            </>
          ) : (
            <h3>Por favor elija una ciudad para continuar</h3>
          )}
        </DivFlex>
        <SideBar/>
      </ContainerAppStyle>
    </>
  );
};

export default MainApp;
