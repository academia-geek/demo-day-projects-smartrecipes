import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendario from "../components/afterLogin/calendario/Calendario";
import ListaProductos from "../components/afterLogin/listaProductos/ListaProductos";
import ContainerPagPrincipal from "../components/afterLogin/pagPrincipalLog/containerPagPrincipal/ContainerPagPrincipal";
import Calendar from "../components/calendar/Calendar";
import CustomMenu from "../components/landing/CustomMenu";
import Logo from "../components/landing/Logo";
import UserOption from "../components/landing/UserOption";
import Welcome from "../components/landing/Welcome";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import NavBarUbicación from "../components/NavBar/NavBarUbicación";
import RecetaIndChef from "../components/Recipes/RecetaIndChef";
import RecetasRecomendadas from "../components/Recipes/RecetasRecomendadas";
import ZonaSocialRecetas from "../components/Recipes/RecetaZonaSocial";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Logo />} />
        <Route path="/welcome" element={< Welcome />} />
        <Route path="/options" element={< UserOption />} />
        <Route path="/u-select" element={< CustomMenu />} />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/zonasocialrecetas" element={<ZonaSocialRecetas />} />
        <Route path="/recetascompletas" element={<RecetasRecomendadas />} />
        <Route path="/recetaindchef" element={<RecetaIndChef />} />
        <Route path="/navbarubicacion" element={<NavBarUbicación />} />

        <Route path="/home" element={<ContainerPagPrincipal/>} />
        <Route path="/productos" element={<ListaProductos/>} />
        <Route path="/calendario" element={<Calendar/>} />


      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
