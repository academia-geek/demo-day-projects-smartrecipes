import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";

import Split from "react-split";
import { ContainerAppStyle } from "../../styles/styledComponents/ContainerApp";
import {
  ContainerAppTopStyle,
  DivFlex,
} from "../../styles/styledComponents/MainAppStyled";
import DinamicMenu from "../landing/DinamicMenu";
import SliderApp from "./middle/SliderApp";
import BarraBusqueda from "./top/barraBusqueda/BarraBusqueda";
import Ubicacion from "./top/ubicacion/Ubicacion";
import { useLocation } from "react-router-dom";
import CalendarLocal from "../calendar/Calendar";
import { Spinner } from "react-bootstrap";
import Login from "../login/Login";
import Register from "../login/Register";
import { ContainerDataMain } from "../../styles/styledComponents/ContainerDataMain";
import ListaProductos from "../afterLogin/listaProductos/ListaProductos";
import Blog from "./dinamic/Blog";
import Configuracion from "../afterLogin/Configuracion/Configuracion";
import { ResizeContext } from "../../context/ResizeContext";
import WelcomeNew from "../WelcomeNew/WelcomeNew";

import { db } from "../../firebase/firebaseConfig";
import { actionAddUserData } from "../../redux/action/actionLogin";
import { useDispatch, useSelector } from "react-redux";


const MainApp = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch()
  const {userId} = useSelector(store => store.login)
  const uid = Object.values(userId)[0]
  console.log('uui',uid)
  const {width,breakpoint} = useContext(ResizeContext);
  const getUserData = async () => {
    const docRef = doc(db, "usuarios", uid);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data()
    dispatch(actionAddUserData(userData))
  }
  useEffect(()=>{
    getUserData()
  },[])


  return (
    <>
      <ContainerAppStyle>
        <Split
          className="split"
         sizes={width > breakpoint ? [100] : [15, 100]}
          // maxSize={[200,700,100]}
          gutterSize={10}
        >       
          {width > breakpoint && (
            <DinamicMenu
              width={width}
              breakpoint={breakpoint}
              // cities={cities}
            />
          )}
          <DivFlex>
            {width < breakpoint && (
              <DinamicMenu width={width} breakpoint={breakpoint} />
            )}
            {/* Render only on condition according to the path */}
            {pathName === "/home" && (
              <>
                <ContainerAppTopStyle>
                  <BarraBusqueda />
                  {/* <Ubicacion /> */}
                  {/* <Idioma /> */}
                </ContainerAppTopStyle>
              </>
            )}
            
            {pathName === "/home" &&( 
            <>
            {/* <SliderApp /> */}
            <WelcomeNew/>
            </>
            )}          
            {pathName === "/login" && <Login />}
            {pathName === "/blog" && <Blog />}
            {pathName === "/register" && <Register />}
            {pathName === "/config" && <Configuracion />}
            {pathName === "/calendario" && <CalendarLocal />}
          </DivFlex>                    
        </Split>
      </ContainerAppStyle>
    </>
  );
};

export default MainApp;
