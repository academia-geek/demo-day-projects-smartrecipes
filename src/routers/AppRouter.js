import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainerPagPrincipal from "../components/afterLogin/pagPrincipalLog/containerPagPrincipal/ContainerPagPrincipal";
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
        <Route path="/" element={< Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/zonasocialrecetas" element={<ZonaSocialRecetas />} />
        <Route path="/recetascompletas" element={<RecetasRecomendadas />} />
        <Route path="/recetaindchef" element={<RecetaIndChef />} />
        <Route path="/navbarubicacion" element={<NavBarUbicación />} />

        <Route path="/home" element={<ContainerPagPrincipal/>} />


      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
