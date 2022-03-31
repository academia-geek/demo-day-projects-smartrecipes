import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
import { SideBarStyled } from "../../styles/styledComponents/newSideBarMenu";
import NavBarUbicacion from "../NavBar/NavBarUbicacion";
import { BsGrid, BsHeart, BsCalendarWeek} from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const SideBarMenu = ({cities}) => {
  return (
    <>
    <SideBarStyled>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/davidcharif/image/upload/v1648315633/demoFakeApi/logoSmall_lumpae.png"
          alt="logo"
          />
      </div>
          <NavBarUbicacion cities={cities}/>
      <div className="menu">
        <ul>
          <li>
            <div>
              <i><BsGrid/></i>
              <p>Categorias</p>
            </div>
          </li>
          <li>
            <div>
              <i><BsHeart/></i>
              <p>Recetas Favoritas</p>
            </div>
          </li>
          <li>
            <div>
              <i><BsCalendarWeek/></i>
              <p>Calendario</p>
            </div>
          </li>
          <li>
            <div>
              <i><IoSettingsOutline/></i>
              <p>Configuracion</p>
            </div>
          </li>
          <li>
            <div>
              <i><HiOutlineLogout/></i>
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
    </>
  );
};

export default SideBarMenu;
