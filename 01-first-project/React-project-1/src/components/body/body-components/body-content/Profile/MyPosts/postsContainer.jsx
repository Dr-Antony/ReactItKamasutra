import React from 'react';
import Posts from './posts';
import { addPostActionCreator, chengeTextActionCreator } from '../../../../../../redux/profileReducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newText: state.profilePage.newText
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => { dispatch(addPostActionCreator(text)); },
        updateNewPostText: (text) => {
            let action = chengeTextActionCreator(text);
            dispatch(action);
        }
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;