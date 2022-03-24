import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainerPagPrincipal from "../components/afterLogin/pagPrincipalLog/containerPagPrincipal/ContainerPagPrincipal";
import CustomMenu from "../components/landing/CustomMenu";
import Logo from "../components/landing/Logo";
import UserOption from "../components/landing/UserOption";
import Welcome from "../components/landing/Welcome";
import Login from "../components/login/Login";
import Register from "../components/login/Register";


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
        <Route path="/home" element={<ContainerPagPrincipal/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
