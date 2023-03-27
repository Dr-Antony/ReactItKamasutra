import React from 'react';
import './profile.css';
import Posts from './MyPosts/posts';

const Profile = () => {
    return (
        <div className='content_profile'>
            <div className='profile__image'><img src='' /></div>
            <div className='profile__user'>
                <div className='user__photo'></div>
                <div className='user__info'>
                </div>
            </div>
            <Posts />
        </div>
    );
};
export default Profile;