import React from 'react'
import { DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionFunctionalCloseSide } from '../../../redux/action/actionFuntional';
import { ContainerIngredientLines, SideBarProductsStyle } from '../../../styles/styledComponents/SideBar';
import { BiTimer } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs"
const SideBarRecetas = () => {
  const {
    currentWatchableRecipe,
  } = useSelector((store) => store.funtional);
  const data = currentWatchableRecipe;
  console.log('data', data)
  const isUndefined = Object.keys(currentWatchableRecipe).length === 0;
  console.log('isUndefined', isUndefined)
  const dispatch = useDispatch();
  const handleClose = () => {
    console.log("close");
    dispatch(actionFunctionalCloseSide());
  };
  return (
    <>
      {!isUndefined ? (
        <SideBarProductsStyle>
          <button onClick={() => handleClose()}>Delete product</button>
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