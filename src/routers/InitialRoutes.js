import { Route, Routes } from "react-router-dom"
import Logo from "../components/landing/Logo"
import Welcome from "../components/landing/Welcome"
import {useState, useEffect} from "react";
import DinamicMenu from "../components/landing/DinamicMenu";
import CustomMenu from "../components/landing/CustomMenu";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import ZonaSocialRecetas from "../components/Recipes/RecetaZonaSocial";
import RecetasRecomendadas from "../components/Recipes/RecetasRecomendadas";
import RecetaIndChef from "../components/Recipes/RecetaIndChef";
import NavBarUbicacion from "../components/NavBar/NavBarUbicacion";
export const InitialRoutes = () => {
  return ( <>
    <Route path="/" element={<Logo />} />
    <Route path="/welcome" element={<Welcome />} />
    </>
  )
}
export const SideMenuRoutes = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <>
    <DinamicMenu width={width} breakpoint={breakpoint} />
    <>
      <Routes>
    <Route path="/u-select" element={<CustomMenu />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/zonasocialrecetas" element={<ZonaSocialRecetas />} />
    <Route path="/recetascompletas" element={<RecetasRecomendadas />} />
    <Route path="/recetaindchef" element={<RecetaIndChef />} />
    <Route path="/navbarubicacion" element={<NavBarUbicacion />} />
    </Routes>
    </>
    </>
  )
}