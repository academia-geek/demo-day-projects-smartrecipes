import React from "react";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import { FormRegister } from "./Form";
import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
import SliderApp from "../mainApp/middle/SliderApp";
import { DivFlex } from "../../styles/styledComponents/MainAppStyled";
//import { useDispatch } from 'react-redux';
//import { register } from '../../redux/action/actionRegister';

const Register = () => {
  //const dispatch = useDispatch()

  return (
    <ContainerAppStyle>
      <SideBarMenu />
      <DivFlex>
      <SliderApp/>
      <FormRegister />
      </DivFlex>
    </ContainerAppStyle>
  );
};

export default Register;
