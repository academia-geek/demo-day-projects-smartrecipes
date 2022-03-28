import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { TitleRecetas } from '../../styles/styledComponents/RecipesStyle';
import { urlciudades } from '../../utilities/urlRecipes';

const NavBarUbicacion = () => {
    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const dataServer = await axios.get(urlciudades);
            console.log(dataServer.data)
          setCiudades(dataServer.data)
      }
      fetchData()
      }, [])

  return (
    <>
<TitleRecetas>Elige tu ciudad</TitleRecetas>

        <DropdownButton align="center" variant="light" title="Ciudades">
        {ciudades !== undefined && ciudades.map((city,i) => {
            return (
              <Dropdown.Item href="#action/3.i" key={`item-${i}`}>{city.name}</Dropdown.Item>
            )
          })}
        </DropdownButton> 
    </>

)
}

export default NavBarUbicacion