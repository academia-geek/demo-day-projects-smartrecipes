import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import CustomMenu from "../landing/CustomMenu";
import Logo from "../landing/Logo";
import UserOption from "../landing/UserOption";
import Welcome from "../landing/Welcome";


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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
