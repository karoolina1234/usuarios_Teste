import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import { Menu } from './styles';
import { Add, HomeOutlined } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { styled } from '@mui/material/styles';
import { MenuItem } from '@mui/material';


const StyledListItem = styled(ListItem)(({ theme }) => ({

}));

const Header = () => {


    return (
        <Menu>
            <Drawer
                className='menuDesktop'
                variant="permanent"
            >
                <Toolbar />
                <div />
                <List>
                    <StyledListItem id="list" >
                        <Link className='menuVal' to="/"><HomeOutlined /><p>Home</p></Link>
                    </StyledListItem>
                    <StyledListItem id="list">
                        <Link className='menuVal' to="/add"><Add /><p>Adicionar</p></Link>
                    </StyledListItem>
                </List>
            </Drawer>

            <div className="mobile-menu-button">
                <Menu>
                    <MenuItem >
                        <Link className='menuVal' to="/"><HomeOutlined /><p>Home</p></Link>
                        <Link className='menuVal' to="/add"><Add /><p>Adicionar</p></Link>
                    </MenuItem>
                </Menu>
            </div>

        </Menu>
    );
};

export default Header;
