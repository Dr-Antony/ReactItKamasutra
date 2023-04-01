import React from 'react';
import p from './posts.module.css'
import Post from './post/post';

const Posts = () => {
    let postsData = [
        { id: 1, message: 'Hello it my first pussy', likeCount: 5 },
        { id: 2, message: 'I liked your ass', likeCount: 112  }
    ];
    let postsArray = postsData.map((p)=>{
        return (<Post message = {p.message} likeCount = {p.likeCount} /> )
    })
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={p.posts}>
                {postsArray}
            </div>
        </div>
    );
};

export default Posts;