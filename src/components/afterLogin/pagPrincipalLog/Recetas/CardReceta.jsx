import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CardGroup } from 'react-bootstrap'
import { SeguimientoPreciosStyled } from '../../../../styles/styledComponents/PagPrincipalStyles'
import { ButtonModal, ButtonParaModal, CardRecetas, ImgReceta } from '../../../../styles/styledComponents/RecipesStyle'
import MyVerticallyCenteredModal from './ModalReceta'

const CardReceta = ({dataServer}) => {
   
    //modal
    const [modalShow, setModalShow] = React.useState(false);
    const [producto, setProducto] = useState('vacio');
    const handleId = ({target}) => {
        const id = target.getAttribute('data-id')
        console.log('id', id)
        const producto = dataServer.filter(producto => producto.id === id)
        console.log('producto', producto)
        setProducto(producto)
    }
    console.log('dataServer', dataServer)
return (  
    <>
    <h3>Top Recetas</h3>
    <SeguimientoPreciosStyled> 
        {dataServer.map((producto,index) => {
            return(
                <CardRecetas key={`index${index}`} data-id={producto.id} onClick={(e) => {
                    handleId(e)
                }} >
                    <div>
                        <ImgReceta src={producto.image} alt='imagen-receta' />
                        <p className='card-text text-capitalize'>{producto.label}</p>
                        
                        <ButtonParaModal data-id={producto.id} onClick={(e) => {
                    handleId(e)
                }}>
                            Detalles
                        </ButtonParaModal>

                       {/* {producto !== 'vacio' &&
                        <MyVerticallyCenteredModal 
                            producto = {producto}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />} */}
                    </div>
                </CardRecetas>
                )
            })}           
    </SeguimientoPreciosStyled>
    </>
)

}
export default CardReceta