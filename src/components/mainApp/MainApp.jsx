import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebaseConfig";
import { actionAdd } from "../../redux/action/actionAdd";
import { actionFunctionalCiudades } from "../../redux/action/actionFuntional";
import Split from "react-split";
import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
import {
  ContainerAppTopStyle,
  DivFlex,
} from "../../styles/styledComponents/MainAppStyled";
import DinamicMenu from "../landing/DinamicMenu";
import Productos from "./dinamic/Productos";
import Recetas from "./dinamic/Recetas";
import SideBar from "./middle/SideBar";

import SliderApp from "./middle/SliderApp";
import BarraBusqueda from "./top/barraBusqueda/BarraBusqueda";
import Idioma from "./top/idioma/Idioma";
import Ubicacion from "./top/ubicacion/Ubicacion";
import { ContainerDataStyled } from "../../styles/styledComponents/ContainerData";
import { useLocation } from "react-router-dom";
import CalendarLocal from "../calendar/Calendar";
import { Spinner } from "react-bootstrap";
import Login from "../login/Login";
import Register from "../login/Register";
import { ContainerDataMain } from "../../styles/styledComponents/ContainerDataMain";
import ListaProductos from "../afterLogin/listaProductos/ListaProductos";

const MainApp = () => {
  let location = useLocation();
  let pathName = location.pathname;
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { path } = useSelector((store) => store.funtional);
  const getFromFirebase = async () => {
    const initialCompany = "merqueo";
    if (localStorage.getItem(`productos${path}${initialCompany}`) === null) {
      const querySnapshot = await getDocs(
        collection(db, `${initialCompany}/${path}/Precios`)
      );

      querySnapshot.forEach((doc) => {
        productos.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      localStorage.setItem(
        `productos${path}${initialCompany}`,
        JSON.stringify(productos)
      );
      dispatch(actionAdd(productos, initialCompany));
    } else {
      productos = JSON.parse(
        localStorage.getItem(`productos${path}${initialCompany}`)
      );
      dispatch(actionAdd(productos, initialCompany));
    }
  };
  let cities = [];
  const getCitiesFromFirebase = async () => {
    //check local storage
    let localStorageCities = JSON.parse(localStorage.getItem("cities"));
    console.log("localStorageCities", localStorageCities);
    if (localStorageCities === null) {
      const querySnapshot = await getDocs(collection(db, "lista"));
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      localStorage.setItem("cities", JSON.stringify(cities));
      dispatch(actionFunctionalCiudades(cities));
    } else {
      dispatch(actionFunctionalCiudades(localStorageCities));
    }
    setIsLoading(false);
  };
  let productos = [];
  if (path !== "") {
    getFromFirebase();
  }
  useEffect(() => {
    getCitiesFromFirebase();
    // save on localstorage
  }, []);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (isLoading) {
    return (
      <Spinner
        animation="border"
        variant="success"
        style={{ display: "block", margin: "35% auto " }}
      />
    );
  }

  return (
    <>
      <ContainerAppStyle>
        <Split
          className="split"
          //Two columns
          sizes={[25,65,10]}
      // minSize={[100,100,50]}
      // maxSize={[100,100,0]}
          gutterSize={30}
        >
          {width > breakpoint && (
            <DinamicMenu
              width={width}
              breakpoint={breakpoint}
              cities={cities}
            />
          )}
          <DivFlex>
            {width < breakpoint && (
              <DinamicMenu width={width} breakpoint={breakpoint} />
            )}

            <ContainerAppTopStyle>
              <BarraBusqueda />
              <Ubicacion />
              {/* <Idioma /> */}
            </ContainerAppTopStyle>
            <SliderApp />

            {path !== "" && pathName === "/home" ? (
              <ContainerDataMain>
                <ListaProductos />
                <Recetas />
              </ContainerDataMain>
            ) : (
              <h3>Por favor elija una ciudad para continuar</h3>
            )}
            {pathName === "/calendario" && <CalendarLocal />}
            {pathName === "/login" && <Login />}
            {pathName === "/register" && <Register />}
          </DivFlex>
          <SideBar />
        </Split>
      </ContainerAppStyle>
    </>
  );
};

export default MainApp;
