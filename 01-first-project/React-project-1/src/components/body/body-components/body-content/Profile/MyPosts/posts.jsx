import React from 'react';
import p from './posts.module.css'
import Post from './post/post';

const Posts = () => {
    let postsData = [
        { id: 1, message: 'Hello it my first pussy', likeCount: 5 },
        { id: 2, message: 'I liked your ass', likeCount: 112  }
    ];
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={p.posts}>
                <Post message = {postsData[0].message} likeCount = {postsData[0].likeCount} />
                <Post message = {postsData[1].message} likeCount = {postsData[1].likeCount} />

            </div>
        </div>
    );
};

export default Posts;