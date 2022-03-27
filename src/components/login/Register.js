import { Field, Formik, useFormik } from "formik";
import React from "react";
import {
  ButtonLogin,
  FormLogin,
} from "../../styles/styledComponents/LoginStyled";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import { FormRegister } from "./Form";
import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
//import { useDispatch } from 'react-redux';
//import { register } from '../../redux/action/actionRegister';

const Register = () => {
  //const dispatch = useDispatch()



  return (
    <ContainerAppStyle>
      <SideBarMenu />
      <FormRegister />
     
    </ContainerAppStyle>
  );
};

export default Register;
