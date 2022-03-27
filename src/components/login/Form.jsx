import React from 'react'
import { Field, Formik, useFormik } from "formik";

import {
  ButtonLogin,
  FormLogin,
} from "../../styles/styledComponents/LoginStyled";
import * as Yup from "yup";
import { Form } from "react-bootstrap";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const FormRegister = () => {
  const preventDefault  = (e) => {
    e.preventDefault();
  }
  return (
    <Formik 
    initialValues={{
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      toggle: false,
      checked: [],
    }}
    onSubmit={async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Email no valido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required()
        .oneOf([Yup.ref("Repeatpassword")], "Contraseñas no coinciden"),
      repeatPassword: Yup.string().required(),
    })}
  >
    {({ values }) => (
      <FormLogin onSubmit={e => preventDefault(e)}>
        {/* 
          This first checkbox will result in a boolean value being stored. Note that the `value` prop
          on the <Field/> is omitted
        */}
        <label>
          <Field type="checkbox" name="toggle" />
          {`${values.toggle}`}
        </label>

        {/* 
          Multiple checkboxes with the same name attribute, but different
          value attributes will be considered a "checkbox group". Formik will automagically
          bind the checked values to a single array for your benefit. All the add and remove
          logic will be taken care of for you.
        */}
         
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su email"
          name="name"
          
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          name="password"
          
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Repita la contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          name="Repeatpassword"
         
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Alergias</Form.Label>
        <Form.Label>Soja</Form.Label>
        <Field type="checkbox" id="alergia1" name="checked" value="Soja" />
        <Form.Label>Pescado</Form.Label>
        <Field type="checkbox" id="alergia2" name="checked" value="Pescado" />
        <Form.Label>Mariscos</Form.Label>
        <Field
          type="checkbox"
          id="alergia3"
          name="checked"
          value="Mariscos"
        />
        <Form.Label>Lacteos</Form.Label>
        <Field type="checkbox" id="alergia4" name="checked" value="Lacteos" />
        <Form.Label>Mani</Form.Label>
        <Field type="checkbox" id="alergia5" name="checked" value="Mani" />
        <Form.Label>Apio</Form.Label>
        <Field type="checkbox" id="alergia6" name="checked" value="Apio" />
        <Form.Label>Mostaza</Form.Label>

        <Field type="checkbox" id="alergia7" name="checked" value="Mostaza" />
      </Form.Group>
      <ButtonLogin variant="primary" type="submit">
        Ingresar
      </ButtonLogin>

      {/*  <Link to="/register" className='registerLogin'>Registrarse</Link> */}
 

        <div id="checkbox-group">Checked</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="checked" value="One" />
            One
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Two" />
            Two
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Three" />
            Three
          </label>
        </div>

        <button type="submit">Submit</button>
      </FormLogin>
    )}
  </Formik>
  )
}

export default Form