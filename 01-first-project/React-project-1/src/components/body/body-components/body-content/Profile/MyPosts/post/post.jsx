import React from 'react';
import s from './post.module.css'

class Post extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className={s.item}>
                <div className={s.container}>
                    <div className={s.user__avatar}>
                        <img src="https://pbs.twimg.com/media/FPsXAFAVcAIJWf4?format=jpg&name=900x900" />
                    </div>
                    <div className={s.user__text}>
                        {this.props.message}
                    </div>
                    <div className={s.like__count}>
                        <div>{this.props.likeCount + ' '}<span>likes</span></div>
                    </div>
                    <div className={s.do_like}>
                        <button  className={s.do_like_btn}>like</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Post;








// const Post = (props) => {
//     return (
//         <div className={s.item}>
//             <div className={s.container}>
//                 <div className={s.user__avatar}>
//                     <img src="https://pbs.twimg.com/media/FPsXAFAVcAIJWf4?format=jpg&name=900x900" />
//                 </div>
//                 <div className={s.user__text}>
//                     {props.message}
//                 </div>
//                 <div className={s.like__count}>
//                     <div>{props.likeCount + ' '}<span>likes</span></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Post;