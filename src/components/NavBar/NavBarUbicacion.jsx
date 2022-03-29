
import React from 'react'

import { useState } from 'react';
import { Dropdown, SplitButton } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { actionFunctional, actionFunctionalPath } from '../../redux/action/actionFuntional';
import { NavLocationStyled } from '../../styles/styledComponents/NavLocationStyled';
import { TitleRecetas } from '../../styles/styledComponents/RecipesStyle';


const NavBarUbicacion = ({cities}) => {
    const [ciudades, setCiudades] = useState(cities);
    const dispatch = useDispatch();
  const handleSelect = ({target : {textContent}}) => {
    let city = textContent;
    dispatch(actionFunctional(textContent));
   
      if(city !== ''){
        let lowerCase = city.toLowerCase();
        let split = lowerCase.split(' ');
        let arrayLength = split.length;
        if(arrayLength > 1 ){
          let path = split.join('-');
          dispatch(actionFunctionalPath(path));      
      } else {
        const removeAccents = (str) => {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } 
        let lowerCase = city.toLowerCase();
        let path = removeAccents(lowerCase);
        dispatch(actionFunctionalPath(path));
    
    
      }
      }
    
    

  };



  return (
    <NavLocationStyled>
<TitleRecetas>Elige tu ciudad</TitleRecetas>

        <SplitButton variant="light" title="Ciudades" id="segmented-button-dropdown-1">
        {ciudades !== undefined && ciudades.map((city,i) => {
            return (
              <Dropdown.Item href="#action/3.i" key={`item-${i}`} onClick={(e) => handleSelect(e)} >{city.ciudad}</Dropdown.Item>
            )
          })}
        </SplitButton> 
    </NavLocationStyled>

)
}

export default NavBarUbicacion