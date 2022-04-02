import { OffcanvasBody } from "react-bootstrap";
import  Offcanvas  from "react-bootstrap/Offcanvas";
import styled from "styled-components";
import { VerdeLima } from "./ColoresEstilos";

export const CanvasStyled = styled.div`
  .closeButton {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
    }
  `
export const OffCanvaBody = styled(OffcanvasBody)`
// background color VerdeLima 
background-color: ${VerdeLima};
width: max-content;

`
export const OffCanva = styled(Offcanvas)`
background-color: black;
width: 0;
`

