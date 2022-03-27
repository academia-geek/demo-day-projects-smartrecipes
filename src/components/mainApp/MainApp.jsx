
import { ContainerAppStyle } from '../../styles/styledComponents/ContainerApp'
import { ContainerAppTopStyle, DivFlex } from '../../styles/styledComponents/MainAppStyled'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import Productos from './dinamic/Productos'
import Recetas from './dinamic/Recetas'
import SliderApp from './middle/SliderApp'
import BarraBusqueda from './top/barraBusqueda/BarraBusqueda'
import Idioma from './top/idioma/Idioma'
import Ubicacion from './top/ubicacion/Ubicacion'

const MainApp = () => {
  return (
    <>
    <ContainerAppStyle>
      <SideBarMenu/>
    <DivFlex>
    <ContainerAppTopStyle>
      <BarraBusqueda/>
      <Ubicacion/>
      <Idioma/>
    </ContainerAppTopStyle>
    <SliderApp/>
    {/* <Productos/> */}
    <Recetas/>
    </DivFlex>
    </ContainerAppStyle>
    </>
  )
}

export default MainApp