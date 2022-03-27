import React from "react";
import { Field, Formik, ErrorMessage, Form } from "formik";

import {
  ButtonLogin,
  FormLogin,
} from "../../styles/styledComponents/LoginStyled";
import * as Yup from "yup";


export const FormRegister = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    alergia: false,
    checked: [],
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido lorem ipsum"),
    email: Yup.string().email("El email no es válido").required("El email es requerido"),
    // create Yup schema for password with min 6 characters and max 20 characters and at least one number
    password: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").max(20, "La contraseña debe tener máximo 20 caracteres").required("La contraseña es requerida").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "La contraseña debe tener al menos una letra y un número"),

    repeatPassword: Yup.string().required("La contraseña es requerida").oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
      })
  
  return (
    
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}

      validationSchema={validationSchema}
    >
      {(props) => (
        <FormLogin as={Form} className="form-signin">
          {/* 
          This first checkbox will result in a boolean value being stored. Note that the `value` prop
          on the <Field/> is omitted
        */}
        

          {/* 
          Multiple checkboxes with the same name attribute, but different
          value attributes will be considered a "checkbox group". Formik will automagically
          bind the checked values to a single array for your benefit. All the add and remove
          logic will be taken care of for you.
        */}

          <FormLogin.Group className="mb-3" controlId="formBasicName" >
            <FormLogin.Label>Nombre</FormLogin.Label>
            <FormLogin.Control
            as = {Field}
            className={props.errors.name ? 'error' : ''}
              type="text"
              placeholder="Ingrese su Nombre"
              name="name"
              
           
            />
            <ErrorMessage className="error-message" name="name" component="small" />
          </FormLogin.Group>
          <FormLogin.Group className="mb-3" controlId="formBasicEmail">
            <FormLogin.Label>Email</FormLogin.Label>
            <FormLogin.Control
            as = {Field}
            className={props.errors.email ? 'error' : ''}
              type="email"
              placeholder="Ingrese su email"
              name="email"          
            />
            <ErrorMessage  name="email" className="error-message" component="small" />
          </FormLogin.Group>

          <FormLogin.Group className="mb-3" controlId="formBasicPassword">
            <FormLogin.Label>Contraseña</FormLogin.Label>
            <FormLogin.Control
            as = {Field}
            className={props.errors.password ? 'error' : ''}
              type="password"
              placeholder="Ingrese su contraseña"
              name="password"
         
            />
            <ErrorMessage name="password" className="error-message" component="small" />
          </FormLogin.Group>

          <FormLogin.Group className="mb-3" controlId="formBasicPassword2">
            <FormLogin.Label>Repita la contraseña</FormLogin.Label>
            <FormLogin.Control
            as = {Field}
              type="password"
              placeholder="Repita su contraseña"
              className={props.errors.repeatPassword ? 'error' : ''}
              name="repeatPassword"
             
            />
            <ErrorMessage name="repeatPassword" className="error-message" component="small" />
          </FormLogin.Group>
          <FormLogin.Label>
            <FormLogin.Check
            
            as = {Field} type="checkbox" name="alergia" />
            {`Alergias ${props.values.alergia}`}
          </FormLogin.Label>

          {props.values.alergia && <FormLogin.Group>
            <FormLogin.Label>Alergias</FormLogin.Label>
            <div id="checkbox-group">Checked</div>
            <div role="group" aria-labelledby="checkbox-group">
              <FormLogin.Label>Soja</FormLogin.Label>
              <Field
                type="checkbox"
                id="alergia1"
                name="checked"
                value="Soja"
              />
              <FormLogin.Label>Pescado</FormLogin.Label>
              <Field
                type="checkbox"
                id="alergia2"
                name="checked"
                value="Pescado"
              />
              <FormLogin.Label>Mariscos</FormLogin.Label>
              <Field
                type="checkbox"
                id="alergia3"
                name="checked"
                value="Mariscos"
              />
              <FormLogin.Label>Lacteos</FormLogin.Label>
              <Field
                type="checkbox"
                id="alergia4"
                name="checked"
                value="Lacteos"
              />
              <FormLogin.Label>Mani</FormLogin.Label>
              <Field
                type="checkbox"
                id="alergia5"
                name="checked"
                value="Mani"
              />
              <FormLogin.Label>Apio</FormLogin.Label>
              <Field
                type="checkbox"
                id="alergia6"
                name="checked"
                value="Apio"
              />
              <FormLogin.Label>Mostaza</FormLogin.Label>

              <Field
                type="checkbox"
                id="alergia7"
                name="checked"
                value="Mostaza"
              />
            </div>
          </FormLogin.Group>
}
          {/*  <Link to="/register" className='registerLogin'>Registrarse</Link> */}

          <button type="submit">Submit</button>
        
        </FormLogin>
      )}
    </Formik>
  );
};

export default FormRegister;
