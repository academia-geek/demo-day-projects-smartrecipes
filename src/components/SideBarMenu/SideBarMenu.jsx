import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
import { SideBarStyled } from "../../styles/styledComponents/newSideBarMenu";

const SideBarMenu = () => {
  return (
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
  );
};

export default SideBarMenu;
