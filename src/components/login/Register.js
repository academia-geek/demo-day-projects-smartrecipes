import React from "react";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import { FormRegister } from "./Form";
import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
import SliderApp from "../mainApp/middle/SliderApp";
import { DivFlex } from "../../styles/styledComponents/MainAppStyled";
import { DivRegister } from "../../styles/styledComponents/RegisterStyle";
//import { useDispatch } from 'react-redux';
//import { register } from '../../redux/action/actionRegister';

const Register = ({setLogin}) => {
  const handleLogin = () => {
    setLogin(true)
  }
  return (
  <DivRegister >
    <button type="button" onClick={()=>handleLogin()}>Login</button>
    <FormRegister setLogin={setLogin} />
  </DivRegister>); 
};

export default Register;
