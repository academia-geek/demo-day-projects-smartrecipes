import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Dropdown, SplitButton } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actionFunctional } from '../../redux/action/actionFuntional';
import { NavLocationStyled } from '../../styles/styledComponents/NavLocationStyled';
import { TitleRecetas } from '../../styles/styledComponents/RecipesStyle';
import { urlciudades } from '../../utilities/urlRecipes';

const NavBarUbicacion = () => {
    const [ciudades, setCiudades] = useState([]);
    const dispatch = useDispatch();
  const handleSelect = ({target : {textContent}}) => {
    
    dispatch(actionFunctional(textContent));

  };

    useEffect(() => {
        async function fetchData() {
          const dataServer = await axios.get(urlciudades);
            console.log(dataServer.data)
          setCiudades(dataServer.data)
      }
      fetchData()
      }, [])

  return (
    <NavLocationStyled>
<TitleRecetas>Elige tu ciudad</TitleRecetas>

        <SplitButton variant="light" title="Ciudades" id="segmented-button-dropdown-1">
        {ciudades !== undefined && ciudades.map((city,i) => {
            return (
              <Dropdown.Item href="#action/3.i" key={`item-${i}`} onClick={(e) => handleSelect(e)} >{city.name}</Dropdown.Item>
            )
          })}
        </SplitButton> 
    </NavLocationStyled>

)
}

export default NavBarUbicacion