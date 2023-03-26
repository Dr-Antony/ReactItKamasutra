import React from 'react';
import './profile.css'

const Profile = () => {
    return (
        <div className='content_profile'>
            <div className='profile__image'><img src='' /></div>
            <div className='profile__user'>
                <div className='user__photo'></div>
                <div className='user__info'>
                </div>
            </div>
            <div className='profile__post'>
                <div className='profile__post-item'></div>
            </div>
        </div>
    );
};
export default Profile;