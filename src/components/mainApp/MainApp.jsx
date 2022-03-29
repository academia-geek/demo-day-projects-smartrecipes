
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../../firebase/firebaseConfig'
import { actionAdd } from '../../redux/action/actionAdd'
import { ContainerAppStyle } from '../../styles/styledComponents/ContainerApp'
import { ContainerAppTopStyle, DivFlex } from '../../styles/styledComponents/MainAppStyled'
import DinamicMenu from '../landing/DinamicMenu'
import Productos from './dinamic/Productos'
import Recetas from './dinamic/Recetas'
import SliderApp from './middle/SliderApp'
import BarraBusqueda from './top/barraBusqueda/BarraBusqueda'
import Idioma from './top/idioma/Idioma'
import Ubicacion from './top/ubicacion/Ubicacion'

const MainApp = () => {
  const dispatch = useDispatch()

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  const [loading, setLoading] = useState(true)
  const getFromFirebase = async () => {

    const querySnapshot = await getDocs(collection(db, "dataprecios/Bogota/precios"));

    querySnapshot.forEach((doc) => {
      productos.push({
        id: doc.id,
        data: doc.data(),
      })
    });
    dispatch(actionAdd(productos))
    setLoading(false)
  }

  let productos = []


  useEffect(() => {

    getFromFirebase()

  }, [])

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (loading) {
    return (<h1>Cargando</h1>)
  }
  return (
    <>
      <ContainerAppStyle>
          {
             width > breakpoint && <DinamicMenu width={width} breakpoint={breakpoint}  />
          }
        <DivFlex>
          {
             width < breakpoint && <DinamicMenu width={width} breakpoint={breakpoint} />
          }
          <ContainerAppTopStyle>
            <BarraBusqueda />
            <Ubicacion />
            <Idioma />
          </ContainerAppTopStyle>
          <SliderApp />
          <Productos />
          <Recetas />
        </DivFlex>
      </ContainerAppStyle>
    </>
  )
}

export default MainApp