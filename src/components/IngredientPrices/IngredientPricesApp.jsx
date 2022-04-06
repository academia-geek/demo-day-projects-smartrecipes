import React, { useContext, useEffect, useState } from 'react'
import { ContainerAppStyle } from '../../styles/styledComponents/ContainerApp'
import { ContainerAppTopStyle, DivFlex } from '../../styles/styledComponents/MainAppStyled'
import DinamicMenu from '../landing/DinamicMenu'
import SideBar from '../mainApp/middle/SideBar'
import Split from 'react-split'
import { useDispatch, useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { actionAdd } from '../../redux/action/actionAdd'
import { ResizeContext } from '../../context/ResizeContext'
import ListaProductos from '../afterLogin/listaProductos/ListaProductos'
import { ContainerDataMain } from '../../styles/styledComponents/ContainerDataMain'
import { actionFunctionalCiudades } from '../../redux/action/actionFuntional'
import { Spinner } from 'react-bootstrap'
import BarraBusqueda from '../mainApp/top/barraBusqueda/BarraBusqueda'
import Ubicacion from '../mainApp/top/ubicacion/Ubicacion'
import { useLocation } from 'react-router-dom'
import Recetas from '../mainApp/dinamic/Recetas'
import SideBarRecetas from '../mainApp/middle/SideBarRecetas'



const IngredientPricesApp = () => {
   const {width,breakpoint} = useContext(ResizeContext);
  const [isLoading, setIsLoading] = useState(true);
  let location = useLocation();
  let pathName = location.pathname;
  const dispatch = useDispatch();
  const { path } = useSelector((store) => store.funtional);
  const getFromFirebase = async () => {
    const initialCompany = "merqueo";
    if (localStorage.getItem(`productos${path}${initialCompany}`) === null) {
      const querySnapshot = await getDocs(
        collection(db, `${initialCompany}/${path}/Precios`)
      );

      querySnapshot.forEach((doc) => {
        productos.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      localStorage.setItem(
        `productos${path}${initialCompany}`,
        JSON.stringify(productos)
      );
      dispatch(actionAdd(productos, initialCompany));
    } else {
      productos = JSON.parse(
        localStorage.getItem(`productos${path}${initialCompany}`)
      );
      dispatch(actionAdd(productos, initialCompany));
    }
  };
  let cities = [];
  const getCitiesFromFirebase = async () => {
    //check local storage
    let localStorageCities = JSON.parse(localStorage.getItem("cities"));
    console.log("localStorageCities", localStorageCities);
    if (localStorageCities === null) {
      const querySnapshot = await getDocs(collection(db, "lista"));
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      localStorage.setItem("cities", JSON.stringify(cities));
      dispatch(actionFunctionalCiudades(cities));
    } else {
      dispatch(actionFunctionalCiudades(localStorageCities));
    }
    setIsLoading(false);
  };
  let productos = [];
  if (path !== "") {
    getFromFirebase();
  }
  useEffect(() => {
    getCitiesFromFirebase();
    // save on localstorage
  }, []);
  if (isLoading) {
    return (
      <Spinner
        animation="border"
        variant="success"
        style={{ display: "block", margin: "35% auto " }}
      />
    );
  }
  return (
    <>
      <ContainerAppStyle>
        <Split
          className="split"
          sizes={[15, 70, 15]}
          minSize={[200, 700, 350]}
          // maxSize={[200,700,100]}
          gutterSize={10}
        >
        
          {width > breakpoint && (
            <DinamicMenu
              width={width}
              breakpoint={breakpoint}
              cities={cities}
            />
          )}
          <DivFlex>
            {width < breakpoint && (
              <DinamicMenu width={width} breakpoint={breakpoint} />
            )}
             <ContainerAppTopStyle>
                  <BarraBusqueda />
                  {/* <Ubicacion /> */}
                  {/* <Idioma /> */}
                </ContainerAppTopStyle>
            {/* Render only on condition according to the path */}  
            <ContainerDataMain>
                {pathName === '/ingredientPrices' && <ListaProductos />}
                {pathName === '/recetas' && <Recetas />}
                {/* <Recetas /> */}
              </ContainerDataMain>
               </DivFlex>
          {pathName ===  '/recetas' ? <SideBarRecetas /> : <SideBar />}        
        </Split>
      </ContainerAppStyle>
    </>
  )
}

export default IngredientPricesApp