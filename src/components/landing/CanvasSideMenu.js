import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { CanvasButton } from "../../styles/styledComponents/CanvasMenu";
import { CanvasStyled } from "../../styles/styledComponents/CanvasStyled";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import React from "react";

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


