import React from "react";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import { FormRegister } from "./Form";
import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
import SliderApp from "../mainApp/middle/SliderApp";
import { DivFlex } from "../../styles/styledComponents/MainAppStyled";
import { DivRegister } from "../../styles/styledComponents/RegisterStyle";
//import { useDispatch } from 'react-redux';
//import { register } from '../../redux/action/actionRegister';

const Register = () => {
  return (
  <DivRegister >
    <FormRegister />
  </DivRegister>); 
};

export default Register;
