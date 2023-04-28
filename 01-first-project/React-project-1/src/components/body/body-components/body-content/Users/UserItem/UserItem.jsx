import React from "react";
import style from './UserItem.module.css'
import userPhoto from './../../../../../../img/userPhoto.png'


const UserItem = (props) => {
    debugger
    return (
        <div className={style.userItem__wrapper}>
            <div className={style.container}>
                <div className={style.userItem__subscribe}>
                    <div className={style.userItem__subscribe_photo}><img src={ props.photo.small != null ? props.photo.small: userPhoto}/></div>
                    <div className={style.userItem__subscribe_btn}>
                        {props.followed ? <button onClick={()=>{props.functions.unFollow(props.id)}} >Unfollow</button>:<button onClick={()=>{props.functions.follow(props.id)}} >Follow</button>}
                    </div>
                </div>
                <div className={style.userItem__info}>
                    <div className={style.userItem__info_ns}>
                        <div className={style.userItem__info_name}>{props.name}</div>
                        <div className={style.userItem__info_status}>{props.status}</div>
                    </div>
                    <div className={style.userItem__info_location}>
                        <div className={style.userItem__info_country}>
                            {/* {props.location.country} */}
                        </div>
                        <div className={style.userItem__info_city}>
                            {/* {props.location.city} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;