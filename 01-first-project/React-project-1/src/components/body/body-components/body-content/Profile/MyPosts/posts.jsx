import React from 'react';
import p from './posts.module.css'
import Post from './post/post';

const Posts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={p.posts}>
                <Post message = "Hello it my first pussy"/>
            </div>
        </div>
    );
};

export default Posts;