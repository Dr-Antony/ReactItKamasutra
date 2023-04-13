import React from 'react';
import style from './posts.module.css'
import Post from './post/post';

import { addPostActionCreator, chengeTextActionCreator } from '../../../../../../redux/state';



const Posts = (props) => {
    let postsArray = props.postsData.postsData.map((p)=>{
        return (<Post message = {p.message} likeCount = {p.likeCount} /> )
    });
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));
    };

    let changeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(chengeTextActionCreator(text))
    };


    return (
        <div>
            <div>
                <textarea onChange={changeText} value={props.postsData.newText} ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={style.posts}>
                {postsArray}
            </div>
        </div>
    );
};

export default Posts;