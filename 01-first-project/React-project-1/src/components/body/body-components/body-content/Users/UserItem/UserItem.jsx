import React from "react";
import { NavLink } from "react-router-dom";
import style from './UserItem.module.css'
import userPhoto from './../../../../../../img/userPhoto.png'
import axios from "axios";

class UserItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style.userItem__wrapper}>
                <div className={style.container}>
                    <div className={style.userItem__subscribe}>
                        <div className={style.userItem__subscribe_photo}>
                            <NavLink to={`/Profile/${this.props.id}`}>
                                <img src={this.props.photo.small != null ? this.props.photo.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div className={style.userItem__subscribe_btn}>
                            {this.props.followed ?
                                <button className={style.btn__unfollow} onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`, { withCredentials: true, headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" } })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                this.props.functions.unFollow(this.props.id)
                                            }
                                        })
                                }} >Unfollow</button>
                                :
                                <button className={style.btn__follow} onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`, null, { withCredentials: true, headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" } })
                                        .then(response => {
                                            debugger
                                            if (response.data.resultCode === 0) {
                                                this.props.functions.follow(this.props.id)
                                            }
                                        })
                                }} >Follow</button>}
                        </div>
                    </div>
                    <div className={style.userItem__info}>
                        <div className={style.userItem__info_ns}>
                            <div className={style.userItem__info_name}>{this.props.name}</div>
                            <div className={style.userItem__info_status}>{this.props.status}</div>
                        </div>
                        <div className={style.userItem__info_location}>
                            <div className={style.userItem__info_country}>
                                Country
                                {/* {props.location.country} */}
                            </div>
                            <div className={style.userItem__info_city}>
                                City
                                {/* {props.location.city} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default UserItem;






// const UserItem = (props) => {
//     debugger
//     return (
//         <div className={style.userItem__wrapper}>
//             <div className={style.container}>
//                 <div className={style.userItem__subscribe}>
//                     <div className={style.userItem__subscribe_photo}><img src={ props.photo.small != null ? props.photo.small: userPhoto}/></div>
//                     <div className={style.userItem__subscribe_btn}>
//                         {props.followed ? <button onClick={()=>{props.functions.unFollow(props.id)}} >Unfollow</button>:<button onClick={()=>{props.functions.follow(props.id)}} >Follow</button>}
//                     </div>
//                 </div>
//                 <div className={style.userItem__info}>
//                     <div className={style.userItem__info_ns}>
//                         <div className={style.userItem__info_name}>{props.name}</div>
//                         <div className={style.userItem__info_status}>{props.status}</div>
//                     </div>
//                     <div className={style.userItem__info_location}>
//                         <div className={style.userItem__info_country}>
//                             {/* {props.location.country} */}
//                         </div>
//                         <div className={style.userItem__info_city}>
//                             {/* {props.location.city} */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };