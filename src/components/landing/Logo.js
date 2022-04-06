import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ButtonLogo,
  ContainerLanding,
  FirstRow,
  ImgLogo,
  TextLanding,
} from "../../styles/styledComponents/LandingStyles";
import { FormLogin, LoginCol } from "../../styles/styledComponents/LoginStyled";
import FormRegister from "../login/Form";
import Login from "../login/Login";
import Register from "../login/Register";

const Logo = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <ContainerLanding fluid>
      <FirstRow>
        <Col xs={12} md={6} lg={6}>
          <ImgLogo
            alt="logo"
            loading="lazy"
            src="https://res.cloudinary.com/davidcharif/image/upload/v1649249962/demoFakeApi/SMART_rECIPES_1_h3xqzl.png"
          />
        </Col>
        <LoginCol xs={12} md={6} lg={6}>
          {showLogin && <Login setLogin={setShowLogin}/>}
          {!showLogin && <Register setLogin={setShowLogin} />}
          
        </LoginCol>
      </FirstRow>
      <Row>
        <Col>
          <TextLanding>Ver solo precio de los ingredientes</TextLanding>

          <Link to="/ingredientPrices" style={{ textDecoration: "none" }}>
            <ButtonLogo>Click</ButtonLogo>
          </Link>
        </Col>
        <Col>
          <TextLanding>Ver solo recetas</TextLanding>
          
          <Link to="/recetas" style={{ textDecoration: "none" }}>
            <ButtonLogo>Click</ButtonLogo>
          </Link>
        </Col>
      </Row>
    </ContainerLanding>
  );
};

export default Logo;
