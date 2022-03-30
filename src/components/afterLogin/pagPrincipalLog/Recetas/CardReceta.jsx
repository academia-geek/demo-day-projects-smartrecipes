import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CardGroup } from 'react-bootstrap'
import { ButtonModal, ButtonParaModal, CardRecetas, ImgReceta } from '../../../../styles/styledComponents/RecipesStyle'
import MyVerticallyCenteredModal from './ModalReceta'

const CardReceta = ({resultado}) => {
    const {dataServer} = resultado
    //modal
    const [modalShow, setModalShow] = React.useState(false);

    //const dispatch = useDispatch();
    //const { recetas } = useSelector((store) => store.add);
  // empieza vacia
 //const {recetasBusqueda} = useSelector(store => store.add)
  // iterate object
  //const activeRecipes =  recetasBusqueda !== 'undefined' && recetasBusqueda.length > 0 ? recetasBusqueda : recetas;
/*   const handleCurrentRecipe = ({target}) => {
    let dataId = target.getAttribute('data-id');    
    // bring object that match with dataId
    const currentRecipe = recetas.find(recipe => recipe.id === dataId);
    dispatch(actionFunctionalCurrentWatchableObject(currentRecipe));
  } */
return (
    <>
    <h3>Top Recetas</h3>
    <CardGroup> 
        {dataServer.map((p,i) => {
            return(
                <CardRecetas key={`index${i}`} data-id={p.id}  >
                    <div>
                        <ImgReceta src={p.image} alt='imagen-receta' />
                        <p className='card-text text-capitalize'>{p.label}</p>
                        
                        <ButtonParaModal onClick={() => setModalShow(true)}>
                            Detalles
                        </ButtonParaModal>

                        <MyVerticallyCenteredModal dataServer = {dataServer}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                    </div>
                </CardRecetas>
                )
            })}           
    </CardGroup>
    </>
)

}
export default CardReceta