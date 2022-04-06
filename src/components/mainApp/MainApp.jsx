import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
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
import Recetas from "./dinamic/Recetas";
import SideBar from "./middle/SideBar";

import SliderApp from "./middle/SliderApp";
import BarraBusqueda from "./top/barraBusqueda/BarraBusqueda";
import Ubicacion from "./top/ubicacion/Ubicacion";
import { useLocation } from "react-router-dom";
import CalendarLocal from "../calendar/Calendar";
import { Spinner } from "react-bootstrap";
import Login from "../login/Login";
import Register from "../login/Register";
import { ContainerDataMain } from "../../styles/styledComponents/ContainerDataMain";
import ListaProductos from "../afterLogin/listaProductos/ListaProductos";
import Blog from "./dinamic/Blog";
import Configuracion from "../afterLogin/Configuracion/Configuracion";
import { ResizeContext } from "../../context/ResizeContext";
import WelcomeNew from "../WelcomeNew/WelcomeNew";


const MainApp = () => {
  let location = useLocation();
  let pathName = location.pathname;
  const {width,breakpoint} = useContext(ResizeContext);


  return (
    <>
      <ContainerAppStyle>
        <Split
          className="split"
         sizes={[25,75]}
          // maxSize={[200,700,100]}
          gutterSize={10}
        >       
          {width > breakpoint && (
            <DinamicMenu
              width={width}
              breakpoint={breakpoint}
              // cities={cities}
            />
          )}
          <DivFlex>
            {width < breakpoint && (
              <DinamicMenu width={width} breakpoint={breakpoint} />
            )}
            {/* Render only on condition according to the path */}
            {pathName === "/home" && (
              <>
                <ContainerAppTopStyle>
                  <BarraBusqueda />
                  <Ubicacion />
                  {/* <Idioma /> */}
                </ContainerAppTopStyle>
              </>
            )}
            
            {pathName === "/home" &&( 
            <>
            <SliderApp />
            <WelcomeNew/>
            </>
            )}          
            {pathName === "/login" && <Login />}
            {pathName === "/blog" && <Blog />}
            {pathName === "/register" && <Register />}
            {pathName === "/config" && <Configuracion />}
            {pathName === "/calendario" && <CalendarLocal />}
          </DivFlex>                    
        </Split>
      </ContainerAppStyle>
    </>
  );
};

export default MainApp;
