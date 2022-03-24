import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavContainer } from '../../styles/styledComponents/RecipesStyle'
import { GiCookingPot, GiCookingGlove, GiCook } from "react-icons/gi";

const NavBarRecipes = () => {
  return (
    <div>
        <NavContainer
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/recetascompletas"><GiCookingPot/> Recetario</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/zonasocialrecetas"><GiCookingGlove/> Zona Social</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/recetaindchef"><GiCook/> Receta de la semana</Nav.Link>
        </Nav.Item>
        </NavContainer>
    </div>
  )
}

export default NavBarRecipes