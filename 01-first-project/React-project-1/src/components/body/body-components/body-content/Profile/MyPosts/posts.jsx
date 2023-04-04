import React from 'react';
import style from './posts.module.css'
import Post from './post/post';

const Posts = (props) => {
    let postsArray = props.postsData.map((p)=>{
        return (<Post message = {p.message} likeCount = {p.likeCount} /> )
    });
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };
    return (
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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