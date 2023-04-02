import React from 'react';
import style from './posts.module.css'
import Post from './post/post';

const Posts = (props) => {
    // let postsData = [
    //     { id: 1, message: 'Hello it my first pussy', likeCount: 5 },
    //     { id: 2, message: 'I liked your ass', likeCount: 112  }
    // ];
    let postsArray = props.postsData.map((p)=>{
        return (<Post message = {p.message} likeCount = {p.likeCount} /> )
    })
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={style.posts}>
                {postsArray}
            </div>
        </div>
    );
};

export default Posts;