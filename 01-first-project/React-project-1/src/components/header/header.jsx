import React from 'react';
import './header.css'
import logo from '../../img/logo.jpg'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    debugger
    return (
        <header className='header'>
            <div className='header__logo'><img src={logo} /></div>
            <div className='header__content'>
                <div className='header__navigation'></div>
                <div className='header__auth'>
                    <div className='auth__login'><NavLink className='auth__btn' to={'/login'}>Login</NavLink></div>
                    <div className='auth__registration'><NavLink className='auth__btn' to={'/registration'}>Registration</NavLink></div>
                </div>
            </div>
        </header>
    );
};

export default Header;