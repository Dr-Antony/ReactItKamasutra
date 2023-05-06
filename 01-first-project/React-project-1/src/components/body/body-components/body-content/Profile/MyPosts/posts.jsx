import React from 'react';
import style from './posts.module.css'
import Post from './post/post';



class Posts extends React.Component {
    allPosts = () => {
        return (
            this.props.postsData.map((p) => {
                return (<Post message={p.message} likeCount={p.likeCount}  />)
            })
        )
    };

    newPostElement = React.createRef();
    onAddPost = () => {
        let text = this.newPostElement.current.value;
        this.props.addPost(text);
    };
    changeText = () => {
        let text = this.newPostElement.current.value;
        this.props.updateNewPostText(text)

    };

    render() {
        return (
            <div className={style.posts}>
                <div className={style.input}>
                    <textarea className={style.text__area} onChange={this.changeText} value={this.props.newText} ref={this.newPostElement}></textarea>
                    <div className={style.btn}>
                        <button className={style.button__add} onClick={this.onAddPost}>Add Post</button>
                        <button className={style.button__remove}>Remove Post</button>
                    </div>
                </div>
                <div className={style.posts__item}>
                    {this.allPosts()}
                </div>
            </div>
        )
    }
};

export default Posts;











// const Posts = (props) => {
//     let postsArray = props.postsData.map((p) => {
//         return (<Post message={p.message} likeCount={p.likeCount} />)
//     });

//     let newPostElement = React.createRef();
//     let onAddPost = () => {
//         let text = newPostElement.current.value;
//         props.addPost(text);
//     };
//     let changeText = () => {
//         let text = newPostElement.current.value;
//         props.updateNewPostText(text)

//     };


//     return (
//         <div className={style.posts}>
//             <div className={style.input}>
//                 <textarea className={style.text__area} onChange={changeText} value={props.newText} ref={newPostElement}></textarea>
//                 <div className={style.btn}>
//                     <button className={style.button__add} onClick={onAddPost}>Add Post</button>
//                     <button className={style.button__remove}>Remove Post</button>
//                 </div>
//             </div>
//             <div className={style.posts__item}>
//                 {postsArray}
//             </div>
//         </div>
//     );
// };

// export default Posts;