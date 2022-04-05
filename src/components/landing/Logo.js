import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ButtonLogo,
  ContainerLanding,

  FirstRow,

  ImgLogo,

  TextLanding,

} from "../../styles/styledComponents/LandingStyles";
import { LoginCol } from "../../styles/styledComponents/LoginStyled";
import Login from "../login/Login";

const Logo = () => {
  return (

    <ContainerLanding fluid>
      <FirstRow>
        <Col xs={12} md={6} lg={6}>
            <ImgLogo
              alt="logo"
              loading="lazy"
              src="https://res.cloudinary.com/david-b/image/upload/v1649123221/AG/demoday/smartr_rwk08x.svg"
            />
        </Col>
        <LoginCol xs={12} md={6} lg={6}>
          <Login />
        </LoginCol>
      </FirstRow>
      <Row>
        <Col>
          <TextLanding>Ver solo precio de los ingredientes</TextLanding>

          <Link to="/welcome" style={{ textDecoration: "none" }}>
            <ButtonLogo>Click</ButtonLogo>
          </Link>
        </Col>
        <Col>
         <TextLanding>Ver solo recetas</TextLanding>
         <ButtonLogo>Click</ButtonLogo>
         </Col> 
         </Row>        

    </ContainerLanding>

  );
};

export default Logo;
