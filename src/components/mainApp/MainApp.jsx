
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../../firebase/firebaseConfig'
import { actionAdd } from '../../redux/action/actionAdd'
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
  const dispatch = useDispatch()
    
  const [loading, setLoading] = useState(true)	
  const getFromFirebase = async () => {

      const querySnapshot = await getDocs(collection(db, "merqueo/bogota/Precios"));

      querySnapshot.forEach((doc) => {
          productos.push({
            id: doc.id,
            data: doc.data(),

          })
        
        });
        dispatch(actionAdd(productos))
        console.log('productos', productos)   
        setLoading(false) 
  }
  
  let productos = []
  

  useEffect(() => {
      
      getFromFirebase()       
      
  }, [])

  if(loading){
      return (<h1>Cargando</h1> )
  }
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
    <Productos/>
    <Recetas/>
    </DivFlex>
    </ContainerAppStyle>
    </>
  )
}

export default MainApp