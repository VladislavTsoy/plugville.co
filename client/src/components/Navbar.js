// Required packages
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'


// Required components


const Navbar = () => {
    return (
        <div className="main-nav-container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/vicario">Vicario</Link></li>
                <li><Link to="/agency">Agency</Link></li>
                <IconButton className="menu-icon">
                    <MenuIcon />
                </IconButton>
            </ul>
        </div>
    );
};

export default Navbar;