import React from 'react';
import './header.css'
import logo from '../../img/logo.jpg'

const Header = () => {
    return (
        <header className='header'>
            
                <div className='header__logo'><img src={logo}  /></div>
                <div className='header__content'></div>
            
        </header>
    );
};

export default Header;