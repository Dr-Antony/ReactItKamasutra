import React from 'react';
import './profile.css';
import Posts from './MyPosts/posts';
import PostsContainer from './MyPosts/postsContainer';

const Profile = (props) => {

    return (
        <div className='content_profile'>
            <div className='profile__image'><img src='' /></div>
            <div className='profile__user'>
                <div className='user__photo'></div>
                <div className='user__info'>
                </div>
            </div>
            <PostsContainer store={props.store} />
        </div>
    );
};
export default Profile;

// const Profile = (props) => {
    
//     return (
//         <div className='content_profile'>
//             <div className='profile__image'><img src='' /></div>
//             <div className='profile__user'>
//                 <div className='user__photo'></div>
//                 <div className='user__info'>
//                 </div>
//             </div>
//             <PostsContainer store={props.store} dispatch={props.dispatch} />
//         </div>
//     );
// };
// export default Profile;