import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CanvasButton } from "../../styles/styledComponents/CanvasMenu";
import { CanvasStyled } from "../../styles/styledComponents/CanvasStyled";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
import { SideBarStyled } from "../../styles/styledComponents/newSideBarMenu";
import NavBarUbicacion from "../NavBar/NavBarUbicacion";
import SideBarMenu from "../SideBarMenu/SideBarMenu";


export default function CanvasMenu({ cities }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow(s => !s);

    return (
        <CanvasStyled>
            <CanvasButton variant="primary" onClick={toggleShow} className="me-2 ">
                Nav Bar
            </CanvasButton>
            <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
                              
                <Offcanvas.Body>
                <Offcanvas.Header closeButton className="closeButton"/> 
                <SideBarMenu cities={cities} />
                </Offcanvas.Body>
            </Offcanvas>
        </CanvasStyled>
    );
}


