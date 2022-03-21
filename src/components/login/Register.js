import { useFormik } from 'formik'
import React from 'react'
import { ButtonLogin, FormLogin } from '../../styles/styledComponents/LoginStyled'
import * as Yup from 'yup';
import { Form } from 'react-bootstrap'

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            Repeatpassword: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string('ashjaks').required("El nombre es obligatorio"),
            email: Yup.string().email("Email no valido").required("El email es obligatorio"),
            password: Yup.string().required().oneOf([Yup.ref("Repeatpassword")], "Contraseñas no coinciden"),
            Repeatpassword: Yup.string().required()

        }),
        onSubmit: (data) => {
            console.log(data)
        }

    })



    return (
        <div>Register

            <FormLogin onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su email"
                        name="name"
                        onChange={formik.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su email"
                        name="email"
                        onChange={formik.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        name="password"
                        onChange={formik.handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Repita la contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        name="Repeatpassword"
                        onChange={formik.handleChange} />
                </Form.Group>
                <ButtonLogin variant="primary" type="submit">
                    Ingresar
                </ButtonLogin>

                {/*  <Link to="/register" className='registerLogin'>Registrarse</Link> */}

            </FormLogin>

        </div>
    )
}

export default Register