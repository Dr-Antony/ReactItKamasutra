import React from 'react';
import Posts from './posts';
import { addPostActionCreator, chengeTextActionCreator } from '../../../../../../redux/profileReducer';



const PostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = (text) => {
        props.store.dispatch(addPostActionCreator(text));
    };
    
    let changeText = (text) => {
        let action = chengeTextActionCreator(text);
        props.store.dispatch(action);
        
    };
    return (
        <Posts 
        updateNewPostText={changeText}
        addPost={addPost}
        postsData={state.profilePage.postsData}
        newText={state.profilePage.newText}
        />
    );
};

export default PostsContainer;