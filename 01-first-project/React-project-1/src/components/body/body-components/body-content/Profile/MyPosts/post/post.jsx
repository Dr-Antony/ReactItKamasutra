import React from 'react';
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://pbs.twimg.com/media/FPsXAFAVcAIJWf4?format=jpg&name=900x900"/>
            {props.message}
            <div>{props.likeCount + ' '}<span>like</span></div>
        </div>
    );
};

export default Post;