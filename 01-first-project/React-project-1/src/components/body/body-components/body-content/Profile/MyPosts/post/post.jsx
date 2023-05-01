import React from 'react';
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.container}>
                <div className={s.user__avatar}>
                    <img src="https://pbs.twimg.com/media/FPsXAFAVcAIJWf4?format=jpg&name=900x900" />
                </div>
                <div className={s.user__text}>
                    {props.message}
                </div>
                <div className={s.like__count}>
                    <div>{props.likeCount + ' '}<span>likes</span></div>
                </div>
            </div>
        </div>
    );
};

export default Post;