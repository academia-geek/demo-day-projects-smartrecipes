import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { CanvasButton } from "../../styles/styledComponents/CanvasMenu";
import { CanvasStyled, OffCanva, OffCanvaBody } from "../../styles/styledComponents/CanvasStyled";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import React from "react";

export default function CanvasMenu({ cities }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <CanvasStyled>
        <CanvasButton variant="primary" onClick={toggleShow} className="me-2 ">
          Aloha
        </CanvasButton>
      </CanvasStyled>
      <OffCanva show={show} onHide={handleClose} className="offCanva">
        <OffCanvaBody className="offCanvaBody">
          <Offcanvas.Header closeButton className="closeButton" />
          <SideBarMenu cities={cities} />
        </OffCanvaBody>
      </OffCanva>
    </>
  );
}
