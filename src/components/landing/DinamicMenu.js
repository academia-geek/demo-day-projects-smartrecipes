import React from 'react'
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import CanvasMenu from './CanvasSideMenu';

const DinamicMenu = ({width, breakpoint, cities}) => {

    if (width > breakpoint) {
        return (
            <SideBarMenu cities={cities} />
        );
    }
    return (
        <CanvasMenu cities={cities} /> 
    );
}

export default DinamicMenu