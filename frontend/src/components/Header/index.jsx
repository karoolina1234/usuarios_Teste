import { Add, Home } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import * as S from './styles'

const Header = () => {
    return (
        <S.Menu>
            <BottomNavigation
                 className="menuItem"
                showLabels
            >
                <BottomNavigationAction href="/" label="Home" icon={<Home  />} />
                <BottomNavigationAction  href="/add" label="Adicionar" icon={<Add />} />

            </BottomNavigation>
        </S.Menu>
    )
}

export default Header