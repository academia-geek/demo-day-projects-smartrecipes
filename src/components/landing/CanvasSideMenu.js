import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CanvasButton } from "../../styles/styledComponents/CanvasMenu";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
import { SideBarStyled } from "../../styles/styledComponents/newSideBarMenu";
import NavBarUbicacion from "../NavBar/NavBarUbicacion";


export default function CanvasMenu({ cities }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <CanvasButton variant="primary" onClick={toggleShow} className="me-2 ">
                click
            </CanvasButton>
            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Smart Recipes</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SideBarStyled>
                        <div className="logo">
                            <img
                                src="https://res.cloudinary.com/davidcharif/image/upload/v1648315633/demoFakeApi/logoSmall_lumpae.png"
                                alt="logo"
                            />
                        </div>
                        <NavBarUbicacion cities={cities} />
                        <div className="menu">
                            <ul>
                                <li>
                                    <div>
                                        <i>Icon</i>
                                        <p>Categorias</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i>Icon</i>
                                        <p>Recetas Favoritas</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i>Icon</i>
                                        <p>Calendario</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i>Icon</i>
                                        <p>Configuracion</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <i>Icon</i>
                                        <p>Logout</p>
                                    </div>
                                </li>
                            </ul>

                            <img
                                src="https://res.cloudinary.com/davidcharif/image/upload/v1648315820/demoFakeApi/imagenSideBar_brl1vb.png"
                                alt="girl juggling fruits"
                            />
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <ButtonLogin> Login </ButtonLogin>
                            </Link>
                            <Link to="/register" style={{ textDecoration: "none" }}>
                                <ButtonLogin> Registro </ButtonLogin>
                            </Link>
                            <button>Home</button>
                        </div>
                    </SideBarStyled>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

