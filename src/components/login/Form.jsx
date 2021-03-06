import React from "react";
import { Field, Formik, ErrorMessage, Form } from "formik";
import { ButtonLogin, FormLogin, LoginStyled } from "../../styles/styledComponents/LoginStyled";
import * as Yup from "yup";
// import fileUpload2 from "../../helpers/fileUpload2";
import fileUpload from "../../helpers/fileUpload";
import { useDispatch } from "react-redux";
import { registroEmailPasswordNombre } from "../../redux/action/actionRegister";
import { useNavigate } from "react-router-dom";

let url = ''

export const FormRegister = ({setLogin}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    url = await fileUpload(file)
      .then((res) => {
        console.log('res', res);
        return res
      })
      .catch((err) => {
        console.log('error', err);
      });

    console.log('url en file change', url)
  };
  //ESTE ES INDEFINIDO

  ;
  const initialValues = {
    name: "",
    email: "",
    password: "",
    photo: '',
    repeatPassword: "",
    alergia: false,
    checked: [],
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido lorem ipsum"),
    email: Yup.string()
      .email("El email no es válido")
      .required("El email es requerido"),
    // create Yup schema for password with min 6 characters and max 20 characters and at least one number
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(20, "La contraseña debe tener máximo 20 caracteres")
      .required("La contraseña es requerida")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "La contraseña debe tener al menos una letra y un número"
      ),

    repeatPassword: Yup.string()
      .required("La contraseña es requerida")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    // validate file Yup
    // handle file change Yup


  });

  return (
    <LoginStyled>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log('url en file on submit', url)
        let { photo } = values

        photo = url
        const values1 = { ...values, photo }

        setTimeout(() => {          
          dispatch(registroEmailPasswordNombre(values1))
          alert('Tu usuario fue creado con éxito')
          setLogin(true)
          setSubmitting(false);
        }, 400);
      }}
      validationSchema={validationSchema}
    >
      {(props) => (
        <FormLogin as={Form} className="form-signin">
          <FormLogin.Group className="mb-3" controlId="formBasicName">
            <FormLogin.Label>Nombre</FormLogin.Label>
            <FormLogin.Control
              as={Field}
              className={props.errors.name ? "error" : ""}
              type="text"
              placeholder="Ingrese su Nombre"
              name="name"
            />
            <ErrorMessage
              className="error-message"
              name="name"
              component="small"
            />
          </FormLogin.Group>
          <FormLogin.Group className="mb-3" controlId="formBasicEmail">
            <FormLogin.Label>Email</FormLogin.Label>
            <FormLogin.Control
              as={Field}
              className={props.errors.email ? "error" : ""}
              type="email"
              placeholder="Ingrese su email"
              name="email"
            />
            <ErrorMessage
              name="email"
              className="error-message"
              component="small"
            />
          </FormLogin.Group>

          <FormLogin.Group className="mb-3" controlId="formBasicPassword">
            <FormLogin.Label>Contraseña</FormLogin.Label>
            <FormLogin.Control
              as={Field}
              className={props.errors.password ? "error" : ""}
              type="password"
              placeholder="Ingrese su contraseña"
              name="password"
            />
            <ErrorMessage
              name="password"
              className="error-message"
              component="small"
            />
          </FormLogin.Group>
          <FormLogin.Group className="mb-3" controlId="formUploadImg">
            <FormLogin.Label>Foto de perfil</FormLogin.Label>
            <input
              className={props.errors.photo ? "error" : ""}
              type="file"
              name="photo"
              onChange={handleFileChange}
            // value is external from Formik 


            />

            <ErrorMessage
              name="photo"
              className="error-message"
              component="small"
            />
          </FormLogin.Group>

          <FormLogin.Group className="mb-3" controlId="formBasicPassword2">
            <FormLogin.Label>Repita la contraseña</FormLogin.Label>
            <FormLogin.Control
              as={Field}
              type="password"
              placeholder="Repita su contraseña"
              className={props.errors.repeatPassword ? "error" : ""}
              name="repeatPassword"
            />
            <ErrorMessage
              name="repeatPassword"
              className="error-message"
              component="small"
            />
          </FormLogin.Group>
          <FormLogin.Label className="checkAsk">
            ¿Posee Alergias?
            <FormLogin.Check as={Field} type="checkbox" name="alergia" />
            {/* {`Alergias ${props.values.alergia}`} */}
          </FormLogin.Label>

          {props.values.alergia && (
            <FormLogin.Group>
              <FormLogin.Label>¿Cuales?</FormLogin.Label>
              <div id="checkbox-group">Por favor, seleccione sus alérgenos
                <div role="group" aria-labelledby="checkbox-group">
                  <FormLogin.Label className="checkAlerg">
                    Soja
                    <FormLogin.Check as={Field}
                      className='checkBox'
                      type="checkbox"
                      id="alergia1"
                      name="checked"
                      value="Soja"
                    />
                  </FormLogin.Label>

                  <FormLogin.Label className="checkAlerg">
                    Pescado
                    <FormLogin.Check as={Field}
                      className='checkBox'
                      type="checkbox"
                      id="alergia2"
                      name="checked"
                      value="Pescado"
                    />
                  </FormLogin.Label>

                  <FormLogin.Label className="checkAlerg">
                    Mariscos
                    <FormLogin.Check as={Field}
                      className='checkBox'
                      type="checkbox"
                      id="alergia3"
                      name="checked"
                      value="Mariscos"
                    />
                  </FormLogin.Label>

                  <FormLogin.Label className="checkAlerg">
                    Lacteos
                    <FormLogin.Check as={Field}
                      className='checkBox'
                      type="checkbox"
                      id="alergia4"
                      name="checked"
                      value="Lacteos"
                    />
                  </FormLogin.Label>

                  <FormLogin.Label className="checkAlerg">
                    Mani
                    <FormLogin.Check as={Field}
                      className='checkBox'
                      type="checkbox"
                      id="alergia5"
                      name="checked"
                      value="Mani"
                    />
                  </FormLogin.Label>

                  <FormLogin.Label className="checkAlerg">
                    Apio
                    <FormLogin.Check as={Field}
                      className='checkBox'
                      type="checkbox"
                      id="alergia6"
                      name="checked"
                      value="Apio"
                    />
                  </FormLogin.Label>

                  <FormLogin.Label className="checkAlerg">
                    Mostaza
                    <FormLogin.Check as={Field}
                      className='checkBox'
                      type="checkbox"
                      id="alergia7"
                      name="checked"
                      value="Mostaza"
                    />
                  </FormLogin.Label>
                </div>
              </div>
            </FormLogin.Group>
          )}
          {/*  <Link to="/register" className='registerLogin'>Registrarse</Link> */}

          <ButtonLogin type="submit">Submit</ButtonLogin>
        </FormLogin>
      )}
    </Formik>
    </LoginStyled>
  );
};

export default FormRegister;
