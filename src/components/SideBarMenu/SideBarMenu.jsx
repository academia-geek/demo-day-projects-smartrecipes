import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
import { DivCategoryStyle, SideBarStyled } from "../../styles/styledComponents/newSideBarMenu";
import NavBarUbicacion from "../NavBar/NavBarUbicacion";
import { BsGrid, BsHeart, BsCalendarWeek} from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const SideBarMenu = () => {
  const {ciudades} = useSelector(store => store.funtional);
  return (
    <>
    <SideBarStyled>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/davidcharif/image/upload/v1648916285/demoFakeApi/logoHQ_th0u6x.png"
          alt="logo"
          />
      </div>
        <NavBarUbicacion cities={ciudades}/>
      <div className="menu">
        <ul>
          <li>
            <DivCategoryStyle>
              <Link to="/ingredientPrices">
              <i><BsGrid className="iconSideBar"/></i>
              <p>Precio actual de tus ingredientes</p>
              </Link>
            </DivCategoryStyle>
          </li>
          <li>
            <DivCategoryStyle>
              <Link to="/recetas">
              <i><BsHeart className="iconSideBar"/></i>
              <p>Recetas</p>
              </Link>
            </DivCategoryStyle>
          </li>
          <li>
            <DivCategoryStyle>
              <Link to="/calendario">
              <i><BsCalendarWeek className="iconSideBar"/></i>
              <p>Calendario</p>
              </Link>
            </DivCategoryStyle>
          </li>
          <li>
            <DivCategoryStyle>
              <Link to="/config">
              <i><IoSettingsOutline className="iconSideBar"/></i>
              <p>Configuracion</p>
              </Link>
            </DivCategoryStyle>
          </li>
          <li>
            <DivCategoryStyle>
              <Link to="/logout">
              <i><HiOutlineLogout className="iconSideBar"/></i>
              <p>Logout</p>
              </Link>
            </DivCategoryStyle>
          </li>
        </ul>
      </div>
      <div className="footer">
        <img
          src="https://res.cloudinary.com/davidcharif/image/upload/v1648916203/demoFakeApi/healthyEating_xe1aga.png"
          alt="girl juggling fruits"
          className="secondImg"
        />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <ButtonLogin> Login </ButtonLogin>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <ButtonLogin> Registro </ButtonLogin>
        </Link>
        <Link to='/home'>
        <ButtonLogin type='button'>Home</ButtonLogin>
        </Link>
      </div>
    </SideBarStyled>
    </>
  );
};

export default SideBarMenu;
