
import Posts from './posts';
import { actions } from '../../../../../../redux/profileReducer.ts';
import { connect } from 'react-redux';

const { addPostActionCreator, chengeTextActionCreator } = actions;

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