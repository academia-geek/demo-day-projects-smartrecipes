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
import IngredientPricesApp from "../components/IngredientPrices/IngredientPricesApp";
import { ProtectedRoutes } from "./ProtectedRoutes";

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
          <Route path="/blog" element={<MainApp />} />
          <Route path="/ingredientPrices" element={<IngredientPricesApp />} />
          <Route path="/recetas" element={<IngredientPricesApp />} />
          <Route path="/zonasocialrecetas" element={<ZonaSocialRecetas />} />
          <Route path="/recetascompletas" element={<RecetasRecomendadas />} />
          <Route path="/recetaindchef" element={<RecetaIndChef />} />
          <Route path="/navbarubicacion" element={<NavBarUbicacion />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<MainApp />} />
            <Route path="/calendario" element={<MainApp />} />
          <Route path="/config" element={<MainApp />} />
          </Route>
          <Route path="/productos" element={<ListaProductos />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
