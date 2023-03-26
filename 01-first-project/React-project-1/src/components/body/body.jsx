import React from 'react';
import './body.css'
import Nav from './body-components/nav';
import Profile from './body-components/body-content/profile';
const Body = () => {
    return (
        <div className='body'>
            <Nav />
            <div className='content'>
                <Profile />
            </div>
        </div>
    );
};

export default Body;