import React from "react";
import { Link } from "react-router-dom";
import { ButtonLogin } from "../../styles/styledComponents/LoginStyled";
import { DivCategoryStyle, SideBarStyled } from "../../styles/styledComponents/newSideBarMenu";
import NavBarUbicacion from "../NavBar/NavBarUbicacion";
import { BsGrid, BsHeart, BsCalendarWeek} from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutSincrono } from "../../redux/action/actionLogin";

const SideBarMenu = () => {
  const {ciudades} = useSelector(store => store.funtional);
  const {isAuth} = useSelector(store => store.login);
  const pathName = window.location.pathname;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSincrono())
  }
  return (
    <>
    <SideBarStyled>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/davidcharif/image/upload/v1649250792/demoFakeApi/SMART_rECIPES_ldf9wl.svg"
          alt="logo"
          />
      </div>
        {pathName === '/ingredientPrices' && <NavBarUbicacion cities={ciudades}/>}
      <div className="menu">
        <ul>
          <li>
            <DivCategoryStyle>
              <Link to="/ingredientPrices">
              <i><BsGrid className="iconSideBar"/></i>
              <p>Precio ingredientes</p>
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
              <Link to="/blog">
              <i><HiOutlineLogout className="iconSideBar"/></i>
              <p>Blog</p>
              </Link>
            </DivCategoryStyle>
          </li>
          {isAuth && 
          <li>
            <DivCategoryStyle>
              <ButtonLogin onClick={()=> handleLogout()}>
              <i><HiOutlineLogout className="iconSideBar"/></i>
              <p>Logout</p>
              </ButtonLogin>
            </DivCategoryStyle>
          </li>}
        </ul>
      </div>
      <div className="footer">
        <img
          src="https://res.cloudinary.com/davidcharif/image/upload/v1648916203/demoFakeApi/healthyEating_xe1aga.png"
          alt="girl juggling fruits"
          className="secondImg"
        />

        {!isAuth && 
          <>
          <Link to="/" style={{ textDecoration: "none" }}>
          <ButtonLogin> Login </ButtonLogin>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ButtonLogin> Registro </ButtonLogin>
        </Link>
        </>
        }
        <Link to='/home'>
        <ButtonLogin type='button' style={{textDecoration: "none"}}>Home</ButtonLogin>
        </Link>
      </div>
    </SideBarStyled>
    </>
  );
};

export default SideBarMenu;
