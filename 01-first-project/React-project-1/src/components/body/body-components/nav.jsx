import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return(
        <div className='nav'>
                <ul className='nav__items'>
                    <li className='nav__item'><NavLink className='nav__button button' to='/Profile'>Profile</NavLink></li>
                    <li className='nav__item'><NavLink className='nav__button button' to='/Messages/*'>Messages</NavLink></li>
                    <li className='nav__item'><NavLink className='nav__button button' to='/News'>News</NavLink></li>
                    <li className='nav__item'><NavLink className='nav__button button' to='/Music'>Music</NavLink></li>
                    <li className='nav__item'><NavLink className='nav__button button' to='/Users'>Users</NavLink></li>
                    <li className='nav__item'><NavLink className='nav__button button last-button' to='/Settings'>Settings</NavLink></li>
                </ul>
            </div>
    );
};
export default Nav;