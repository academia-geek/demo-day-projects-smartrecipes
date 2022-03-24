import React from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { login, loginFacebook, loginGoogle } from '../../redux/action/actionLogin';
import { ButtonLogin, DivLogin, FormLogin, IconCol } from '../../styles/styledComponents/LoginStyled';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";


const Login = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
    }

    return (
     
       
        <DivLogin>
            <FormLogin onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese su email"
                        name="email"
                        value={email}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        name="password"
                        value={password}
                        onChange={handleInputChange} />
                </Form.Group>
                <ButtonLogin variant="primary" type="submit">
                    Ingresar
                </ButtonLogin>

                <IconCol>
                    <FcGoogle
                        className='iconLogin'
                        onClick={handleGoogle}
                    />
                    <ImFacebook2
                        className='iconLogin'
                        onClick={handleFacebook}
                    />
                </IconCol>

                <Link to="/register" className='registerLogin'>Registrarse</Link>
                <br/>
                <Link to="/Calendar" className='registerLogin'>Calendario</Link>

            </FormLogin>

        </DivLogin>
      
    )
}

export default Login