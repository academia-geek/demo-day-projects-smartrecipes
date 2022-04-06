import React from 'react'
import { DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionFunctionalCloseSide } from '../../../redux/action/actionFuntional';
import { ContainerIngredientLines, SideBarProductsStyle } from '../../../styles/styledComponents/SideBar';
import { BiTimer } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs"
import { addFavorite } from '../../../redux/action/actionLogin';
const SideBarRecetas = () => {
  const {
    currentWatchableRecipe,
  } = useSelector((store) => store.funtional);
  const data = currentWatchableRecipe;
  const isUndefined = Object.keys(currentWatchableRecipe).length === 0;
  const {isAuth} = useSelector((store) => store.login)
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(actionFunctionalCloseSide());
  };
  const handleFav = () => {
    dispatch(addFavorite(data))
    alert('Que bueno que te gusta esta receta')
  }
  return (
    <>
      {!isUndefined ? (
        <SideBarProductsStyle>
          <button onClick={() => handleClose()}>Vaciar barra</button>
          <div className="container-img">
            <h3>{data.label}</h3>
            <div>
            <img src={data.image} alt="" />
            <div>
          <BiTimer /> {data.time}  <BsFillPersonFill /> {data.porciones}
          </div>
            </div>
            <ContainerIngredientLines>
            {data.ingredientLines.map((item, index) => (
              <p key={index}>
              {item}
                </p>              
            ))}
           
            </ContainerIngredientLines> 
            <strong>Datos nutricionales:</strong>
        <br/>
          Calorias: {data.calories}
          <DropdownButton  variant="light" title="Libre de: ">
        {data.healthLabels !== undefined && data.healthLabels.map((each,i) => {
          return (
            <p>{each}</p>
          )
        })}

      </DropdownButton>  
        {isAuth && <button className='btn btn-secondary' onClick={() => handleFav()}> Agregar a favoritos</button>}
    
           
          </div>

        
        </SideBarProductsStyle>
      ) : (
        <>
          <SideBarProductsStyle>
            <div>
              <h3>Esta es tu barra auxiliar</h3>
              <p>Aqui puedes ver tus recetas seleccionadas</p>
            </div>
          </SideBarProductsStyle>
        </>
      )}
    </>
  );
};

export default SideBarRecetas