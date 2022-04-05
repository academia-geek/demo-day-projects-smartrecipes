import React, {useState, useEffect} from 'react'
import { Calendar } from 'react-calendar'
import { ContainerAppStyle } from '../../styles/styledComponents/ContainerApp'
import { ContainerAppTopStyle, DivFlex } from '../../styles/styledComponents/MainAppStyled'
import DinamicMenu from '../landing/DinamicMenu'
import SideBar from '../mainApp/middle/SideBar'
import SliderApp from '../mainApp/middle/SliderApp'
import BarraBusqueda from '../mainApp/top/barraBusqueda/BarraBusqueda'
import Ubicacion from '../mainApp/top/ubicacion/Ubicacion'
import Split from "react-split";
import { useSelector } from 'react-redux'
import CalendarLocal from './Calendar'
const CalendarContainer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  const {ciudades} = useSelector((store) => store.funtional);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    
     <>
      <ContainerAppStyle>
        {width > breakpoint && (
          <DinamicMenu width={width} breakpoint={breakpoint} cities={ciudades} />
        )}
        <Split
          className="split"
          //Two columns
          sizes={[100, 0]}
          minSize={[80, 20]}
          gutterSize={20}
          snapOffset={0}          
        >
          <DivFlex>
            {width < breakpoint && (
              <DinamicMenu width={width} breakpoint={breakpoint} />
            )}

            <ContainerAppTopStyle>
              <BarraBusqueda />
              <Ubicacion />
              {/* <Idioma /> */}
            </ContainerAppTopStyle>
            <SliderApp />
           <CalendarLocal/>
          </DivFlex>
          <SideBar />
        </Split>
      </ContainerAppStyle>
    </>
      
    
  )
}

export default CalendarContainer