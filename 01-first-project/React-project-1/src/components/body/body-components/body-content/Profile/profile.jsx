import React from 'react';
import './profile.css';
import userPhoto from '../../../../../img/userPhoto.png';
import backGround from '../../../../../img/backGround.jpeg';
import anton from '../../../../../img/Anton.jpg'



import PostsContainer from './MyPosts/postsContainer';
import Preloader from '../../../../common/preloader/preloader';
import { Navigate } from 'react-router-dom';

const Profile = (props) => {
    if (!props.isAuth) {
        return (
            <Navigate to={'/login'}/>
        )
    }
    if(!props.profile){
        <Preloader/>
    } else {
    return (
        <div className='profile'>
            <div className='profile__user'>
                <div className='user__background_img'><img src={backGround}/></div>
                <div className='user__avatar'>{ props.profile.photos.large ? <img src={props.profile.photos.large}/> :  <img src={userPhoto}/>}</div>
                <div className='user__name'>{props.profile.fullName}</div>
            </div>
            <div className='profile__posts'>
                <PostsContainer />
            </div>
        </div>
    );
};
}
export default Profile;

