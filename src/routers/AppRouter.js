import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Configuracion from "../components/afterLogin/Configuracion/Configuracion";
import ListaProductos from "../components/afterLogin/listaProductos/ListaProductos";
import Logo from "../components/landing/Logo";
import Welcome from "../components/landing/Welcome";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import NavBarUbicacion from "../components/NavBar/NavBarUbicacion";
import RecetaIndChef from "../components/Recipes/RecetaIndChef";
import RecetasRecomendadas from "../components/Recipes/RecetasRecomendadas";
import ZonaSocialRecetas from "../components/Recipes/RecetaZonaSocial";
import CalendarContainer from "../components/calendar/CalendarContainer";
import MainApp from "../components/mainApp/MainApp";

const AppRouter = () => {

  return (
    <>
    <BrowserRouter>
  
    
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/welcome" element={<Welcome />} />

        <Route path="/u-select " element={<MainApp />} />
        <Route path="/login" element={<MainApp />} />
        <Route path="/register" element={<MainApp />} />

        <Route path="/zonasocialrecetas" element={<ZonaSocialRecetas />} />
        <Route path="/recetascompletas" element={<RecetasRecomendadas />} />
        <Route path="/recetaindchef" element={<RecetaIndChef />} />
        <Route path="/navbarubicacion" element={<NavBarUbicacion />} />

        <Route path="/home" element={<MainApp />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/calendario" element={<CalendarContainer />} />
        <Route path="/config" element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AppRouter;


