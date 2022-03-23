import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainerPagPrincipal from "../components/afterLogin/pagPrincipalLog/containerPagPrincipal/ContainerPagPrincipal";
import Login from "../components/login/Login";
import Register from "../components/login/Register";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ContainerPagPrincipal/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
