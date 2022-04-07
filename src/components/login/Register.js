import React from "react";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import { FormRegister } from "./Form";
import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
import SliderApp from "../mainApp/middle/SliderApp";
import { DivFlex } from "../../styles/styledComponents/MainAppStyled";
import { DivRegister } from "../../styles/styledComponents/RegisterStyle";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
//import { useDispatch } from 'react-redux';
//import { register } from '../../redux/action/actionRegister';

const Register = ({setLogin}) => {
  const handleLogin = () => {
    setLogin(true)
  }
  return (
  <DivRegister >
    <ButtonLogin type="button" onClick={()=>handleLogin()}>Login</ButtonLogin>
    <FormRegister setLogin={setLogin} />
  </DivRegister>); 
};

export default Register;
