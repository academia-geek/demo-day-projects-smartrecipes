//import { Button, Col, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import styled from "styled-components";

export const TitleCalendar = styled.h4`
    padding: 4rem 0px 2rem;
    color:  black;
    font-size: 25px;
    font-family: roboto;
    text-align: center;
`

export const SubTitleCal = styled.h4`
   color:  black;
   font-size: 18px;
   font-family: roboto;
   text-align: center;
`

export const DivMonth = styled(Container)`
   background-color:  pink;
   @media only screen and (max-width: 600px) {
        width:90%;
    }
`
export const DivWeekly = styled(Container)`
   background-color:  aqua;
   @media only screen and (max-width: 600px) {
        width:90%;
    }
`