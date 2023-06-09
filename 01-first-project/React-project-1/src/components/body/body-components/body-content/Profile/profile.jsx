import React, { useEffect, useState } from 'react';
import './profile.css';
import userPhoto from '../../../../../img/userPhoto.png';
import backGround from '../../../../../img/backGround.jpeg';
import anton from '../../../../../img/Anton.jpg'

import ProfileStatus from './Status/ProfileStatus';
import ProfileStatusWithHooks from './Status/ProfileStatusWithHooks';

import ProfileInfoForm from './ProfileDataForm/ProfileInfoForm';


import PostsContainer from './MyPosts/postsContainer';
import Preloader from '../../../../common/preloader/preloader';

const Profile = React.memo((props) => {
    const photoSelector = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    let [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        <Preloader />
    } else {
        return (
            <div className='profile'>
                <div className='profile__user'>
                    <div className='user__background_img'><img src={backGround} /></div>
                    <div className='user__avatar'>{props.profile.photos.large ? <img src={props.profile.photos.large} /> : <img src={userPhoto} />}</div>
                    <div>{props.isOwner && <input type={"file"} onChange={photoSelector} />}</div>
                    <div className='user__name_and_status'>
                        <div className='user__name'>{props.profile.fullName}</div>
                        <div className='user__status'><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId} /></div>
                    </div>
                    {editMode ? <ProfileInfoForm  goToEditMode={() => { setEditMode(false) }}  {...props} /> : <ProfileInfo {...props} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
                </div>
                <div className='profile__posts'>
                    <PostsContainer />
                </div>
            </div>
        );
    };
})

const ProfileInfo = (props) => {
    debugger
    return (
        <div className='description__container'>
            {props.isOwner ? <div><button onClick={props.goToEditMode}>Редактировать</button></div> : null}
            <div className='user__description'>
                <div className='user_block'>
                    <div className='about__me'><b>About me: </b>{props.profile.aboutMe ? props.profile.aboutMe : 'About me'}</div>
                    <div className='job__description'><b>About my job: </b>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'lookingForAJobDescription'}</div>
                    <div className='about__job'><b>Looking job: </b>{props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                </div>
                <div className='contacts'><b>Contacts:</b>{Object.keys(props.profile.contacts).map((key) => { return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} /> })}</div>
            </div>
        </div>
    )
}
const Contact = ({ contactTitle, contactValue }) => {
    debugger
    return (
        <div className='contact__item'>
            {contactValue ? <div><b>{contactTitle}</b>: {contactValue}</div> : null}
        </div>
    )
}


export default Profile;

