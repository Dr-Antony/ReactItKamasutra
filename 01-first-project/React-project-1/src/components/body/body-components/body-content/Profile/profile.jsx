import React from 'react';
import './profile.css';
import userPhoto from '../../../../../img/userPhoto.png';
import backGround from '../../../../../img/backGround.jpeg';



import PostsContainer from './MyPosts/postsContainer';

const Profile = (props) => {

    return (
        <div className='profile'>
            <div className='profile__user'>
                <div className='user__background_img'><img src={backGround}/></div>
                <div className='user__avatar'><img src={userPhoto}/></div>
                <div className='user__name'>Anton Nedialkov</div>
            </div>
            <div className='profile__posts'>
                <PostsContainer />
            </div>
        </div>
    );
};
export default Profile;

