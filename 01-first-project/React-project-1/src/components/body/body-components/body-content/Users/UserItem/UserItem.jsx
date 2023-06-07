import React from "react";
import { NavLink } from "react-router-dom";
import style from './UserItem.module.css'
import userPhoto from './../../../../../../img/userPhoto.png'


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
                                <button disabled={this.props.followingProgress.some(id => id === this.props.id)} className={style.btn__unfollow} onClick={(e) => {
                                    debugger
                                    this.props.functions.unfollowUsr(this.props.id)
                                }} >Unfollow</button>
                                :
                                <button disabled={this.props.followingProgress.some(id => id === this.props.id)} className={style.btn__follow} onClick={(e) => {
                                    debugger
                                    this.props.functions.followUsr(this.props.id)
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



