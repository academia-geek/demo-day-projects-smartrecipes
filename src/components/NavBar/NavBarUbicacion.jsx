import React from "react";
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actionFunctional, actionFunctionalPath } from '../../redux/action/actionFuntional';
import { NavLocationStyled } from '../../styles/styledComponents/NavLocationStyled';
import { SplitStyled } from '../../styles/styledComponents/newSideBarMenu';
import { TitleRecetas } from '../../styles/styledComponents/RecipesStyle';


const NavBarUbicacion = () => {
  const { ciudades } = useSelector((store) => store.funtional);
  const dispatch = useDispatch();
  const handleSelect = ({ target: { textContent } }) => {
    let city = textContent;
    dispatch(actionFunctional(textContent));
    if (city !== "") {
      let lowerCase = city.toLowerCase();
      let split = lowerCase.split(" ");
      let arrayLength = split.length;
      if (arrayLength > 1) {
        let path = split.join("-");
        dispatch(actionFunctionalPath(path));
      } else {
        const removeAccents = (str) => {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        };
        let lowerCase = city.toLowerCase();
        let path = removeAccents(lowerCase);
        dispatch(actionFunctionalPath(path));
      }
    }
  };

  return (

    <NavLocationStyled>
      <TitleRecetas>Selecciona tu ubicación</TitleRecetas>

      <SplitStyled variant="light" title="Ciudades" id="segmented-button-dropdown-1">
        {ciudades !== undefined && ciudades.map((city, i) => {
          return (
            <Dropdown.Item key={`item-${i}`} onClick={(e) => handleSelect(e)} >{city.ciudad}</Dropdown.Item>
          )
        })}
      </SplitStyled>

    </NavLocationStyled>
  );
};

export default NavBarUbicacion;
