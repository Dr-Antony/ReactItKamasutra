import React from 'react';
import style from './posts.module.css'
import Post from './post/post';



const Posts = (props) => {
    let postsArray = props.postsData.map((p)=>{
        return (<Post message = {p.message} likeCount = {p.likeCount} /> )
    });
    let newPostElement = React.createRef();
    let onAddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };
    let changeText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        
    };


    return (
        <div>
            <div>
                <textarea onChange={changeText} value={props.newText} ref={newPostElement}></textarea>
                <button onClick={onAddPost}>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={style.posts}>
                {postsArray}
            </div>
        </div>
    );
};

export default Posts;