import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { CardRecetas, ImgReceta } from '../../../../styles/styledComponents/RecipesStyle'

const CardReceta = ({resultado}) => {
    const {dataServer} = resultado
    console.log(dataServer)
    dataServer.map(p => {
        return console.log(p.label)
    })

return (
    <CardGroup>
        {dataServer.map((p => {
            return(
                <CardRecetas>
                    <div>
                        <ImgReceta src={p.image} alt='imagen-receta' />
                        <p className='card-text text-capitalize'>{p.label}</p>
                    </div>
                </CardRecetas>
                )
            }))}           
    </CardGroup>
)
}

export default CardReceta