import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
import { SideBarStyled } from "../../styles/styledComponents/newSideBarMenu";

const options = [
    {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: true,
    },
];



export default function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2">
                click
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SideBarStyled>
                        <div className="logo">
                            <img
                                src="https://res.cloudinary.com/davidcharif/image/upload/v1648315633/demoFakeApi/logoSmall_lumpae.png"
                                alt="logo"
                            />
                        </div>
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

function Example() {
    return (
        <>
            {options.map((props, idx) => (
                <OffCanvasExample key={idx} {...props} />
            ))}
        </>
    );
}


