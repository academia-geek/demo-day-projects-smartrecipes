import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendario from "../components/afterLogin/calendario/Calendario";
import ListaProductos from "../components/afterLogin/listaProductos/ListaProductos";
import ContainerPagPrincipal from "../components/afterLogin/pagPrincipalLog/containerPagPrincipal/ContainerPagPrincipal";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
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

        <Route path="/home" element={<ContainerPagPrincipal/>} />
        <Route path="/productos" element={<ListaProductos/>} />
        <Route path="/calendario" element={<Calendario/>} />


      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
