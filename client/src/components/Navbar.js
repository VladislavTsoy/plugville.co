// Required packages
import React, { PureComponent, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-css-transition';
import '../styles/navbar.css';

// Required components
import FullNav from './FullNav';

class Navbar extends PureComponent {
    constructor() {
        super();
        this.state = {
            toggle: false
        }
    };

    handleToggle = () => {
        console.log(this.state);
        this.setState({toggle: !this.state.toggle});
    };

    render(){
        return (
            <Fragment>
                <div className="main-nav-container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/vicario">Vicario</Link></li>
                        <li><Link to="/agency">Agency</Link></li>
                        <IconButton className="menu-icon" onClick={this.handleToggle}>
                            <MenuIcon />
                        </IconButton>
                    </ul>
                </div>
                <CSSTransition active={this.state.toggle}>
                    {this.state.toggle && <FullNav handleToggle={this.handleToggle}/>}
                </CSSTransition>
            </Fragment>
        );
    }
};

export default Navbar;