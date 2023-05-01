import React from 'react';
import style from './posts.module.css'
import Post from './post/post';



const Posts = (props) => {
    let postsArray = props.postsData.map((p) => {
        return (<Post message={p.message} likeCount={p.likeCount} />)
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
        <div className={style.posts}>
            <div className={style.input}>
                <textarea className={style.text__area} onChange={changeText} value={props.newText} ref={newPostElement}></textarea>
                <div className={style.btn}>
                    <button className={style.button__add} onClick={onAddPost}>Add Post</button>
                    <button className={style.button__remove}>Remove Post</button>
                </div>
            </div>
            <div className={style.posts__item}>
                {postsArray}
            </div>
        </div>
    );
};

export default Posts;