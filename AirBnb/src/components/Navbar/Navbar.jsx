import React from 'react';
import logo from '../../images/airbnb-logo.svg'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <img className='logo' src={logo} alt='logo' />
        </nav>
    )
}

export default Navbar;