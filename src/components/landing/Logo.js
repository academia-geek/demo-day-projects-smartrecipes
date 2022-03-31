import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonLogo,
  DivLogo,
  ImgLogo,
} from "../../styles/styledComponents/LandingStyles";

const Logo = () => {
  return (
    <DivLogo>
      <ImgLogo
        alt="logo"
        loading="lazy"
        src="https://res.cloudinary.com/david-b/image/upload/v1648052111/AG/demoday/Group_17_epsd1a.png"
      />
      <Link to="/welcome" style={{ textDecoration: "none" }}>
        <ButtonLogo>Siguiente</ButtonLogo>
      </Link>
    </DivLogo>
  );
};

export default Logo;
