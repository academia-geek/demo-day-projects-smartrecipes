import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ButtonLogo,
  DivLogo,
  ImgCol,
  ImgLogo,
  LogoCol,
  LogoContainer,
  LogoDiv,
} from "../../styles/styledComponents/LandingStyles";
import { LoginCol } from "../../styles/styledComponents/LoginStyled";
import Login from "../login/Login";

const Logo = () => {
  return (
    <Container >
      <Row>
        <ImgCol>
            <ImgLogo
              alt="logo"
              loading="lazy"
              src="https://res.cloudinary.com/david-b/image/upload/v1648052111/AG/demoday/Group_17_epsd1a.png"
            />
        </ImgCol>
        <LoginCol>
          <Login />
        </LoginCol>
      </Row>
      <Row>
        <Col>
          <Link to="/welcome" style={{ textDecoration: "none" }}>
            <ButtonLogo>Click</ButtonLogo>
          </Link>
        </Col>
        <Col>
          <Link to="/welcome" style={{ textDecoration: "none" }}>
            <ButtonLogo>Click</ButtonLogo>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Logo;
