import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Configuracion from "../components/afterLogin/Configuracion/Configuracion";
import ListaProductos from "../components/afterLogin/listaProductos/ListaProductos";
import ContainerPagPrincipal from "../components/afterLogin/pagPrincipalLog/containerPagPrincipal/ContainerPagPrincipal";
import Calendar from "../components/calendar/Calendar";
import CustomMenu from "../components/landing/CustomMenu";
import DinamicMenu from "../components/landing/DinamicMenu";
import Logo from "../components/landing/Logo";
import Welcome from "../components/landing/Welcome";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import NavBarUbicacion from "../components/NavBar/NavBarUbicacion";
import RecetaIndChef from "../components/Recipes/RecetaIndChef";
import RecetasRecomendadas from "../components/Recipes/RecetasRecomendadas";
import ZonaSocialRecetas from "../components/Recipes/RecetaZonaSocial";
import {useState, useEffect} from "react";
import { ContainerCalendar } from "../styles/styledComponents/ContainerCalendar";
import CalendarContainer from "../components/calendar/CalendarContainer";

const AppRouter = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 600;
  // 
  // useEffect(() => {
  //   const handleResizeWindow = () => setWidth(window.innerWidth);
  //   // subscribe to window resize event "onComponentDidMount"
  //   window.addEventListener("resize", handleResizeWindow);
  //   return () => {
  //     // unsubscribe "onComponentDestroy"
  //     window.removeEventListener("resize", handleResizeWindow);
  //   };
  // }, []);

  return (
    <>
    <BrowserRouter>
    
    
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/u-select" element={<CustomMenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/zonasocialrecetas" element={<ZonaSocialRecetas />} />
        <Route path="/recetascompletas" element={<RecetasRecomendadas />} />
        <Route path="/recetaindchef" element={<RecetaIndChef />} />
        <Route path="/navbarubicacion" element={<NavBarUbicacion />} />

        <Route path="/home" element={<ContainerPagPrincipal />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/calendario" element={<CalendarContainer />} />
        <Route path="/config" element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AppRouter;


export const privateRoutes = ({width, breakpoint}) => {
  return (
    <>
    <DinamicMenu width={width} breakpoint={breakpoint} />
    <Routes>
      <Route path="/u-select" element={<CustomMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/zonasocialrecetas" element={<ZonaSocialRecetas />} />
      <Route path="/recetascompletas" element={<RecetasRecomendadas />} />
      <Route path="/recetaindchef" element={<RecetaIndChef />} />
      <Route path="/navbarubicacion" element={<NavBarUbicacion />} />
      <Route path="/home" element={<ContainerPagPrincipal />} />
      <Route path="/productos" element={<ListaProductos />} />
      <Route path="/calendario" element={<Calendar />} />
      <Route path="/config" element={<Configuracion />} />
    </Routes>
    </>
  );
}