import React from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { login, loginFacebook, loginGoogle } from '../../redux/action/actionLogin';
import { ButtonLogin, DivLogin, FormLogin, IconCol, LoginStyled } from '../../styles/styledComponents/LoginStyled';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        navigate('/home')
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
        navigate('/home')
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
        navigate('/home')
    }

    return (
        <LoginStyled>
            <h4 className='login-text'>Inicia Sesión</h4>
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
                <hr/>
                <h4>Redes sociales</h4>
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

            </FormLogin>
        </LoginStyled>


    )
}

export default Login