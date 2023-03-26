import React from 'react';
import './nav.css'

const Nav = () => {
    return(
        <div className='nav'>
                <ul className='nav__items'>
                    <li className='nav__item'><a className='nav__button button' href='#'>Profile</a></li>
                    <li className='nav__item'><a className='nav__button button' href='#'>Messages</a></li>
                    <li className='nav__item'><a className='nav__button button' href='#'>News</a></li>
                    <li className='nav__item'><a className='nav__button button' href='#'>Music</a></li>
                    <li className='nav__item'><a className='nav__button button last-button' href='#'>Settings</a></li>
                </ul>
            </div>
    );
};
export default Nav;