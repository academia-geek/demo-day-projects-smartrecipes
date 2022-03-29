import React, { useEffect, useState } from 'react'
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import CanvasMenu from './CanvasSideMenu';

const DinamicMenu = ({width, breakpoint}) => {

    if (width > breakpoint) {
        return (
            <SideBarMenu />
        );
    }
    return (
        <CanvasMenu />
    );
}

export default DinamicMenu