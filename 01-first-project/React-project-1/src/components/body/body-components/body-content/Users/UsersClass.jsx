import React from "react";
import UserItem from "./UserItem/UserItem";
import style from './Users.module.css';

let Users = (props) => {
    let allUsers = () => {
        return (
            props.state.users.map((user) => {
                return (<UserItem id={user.id} followed={user.followed} key={user.id} photo={user.photos} name={user.name} status={user.status} functions={props} />)
            })
        )
    };
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i < 11; i++) {
        pages.push(i);
    }
    return (
        <div className={style.users__wrapper}>
            <div className={style.users__container}>
                {pages.map((p) => {
                    return (<button className={props.currentPage === p ? style.selected_page : style.unselected_page} onClick={(e) => { props.pageChange(p) }}>{p}</button>)
                })}
            </div>
            {allUsers()}
        </div>
    )
}


export default Users;








// return (<button className={this.props.currentPage === { p } ? style.selected_page : style.unselected_page} onClick={(e) => { this.pageChange(p) }}>{p}</button>)