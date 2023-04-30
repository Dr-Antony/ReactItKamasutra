import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";

import style from './Users.module.css';


const Users = (props) => {
    let getUsers = () => {
        if (props.state.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.getUsers(response.data.items);
            })
        };
    }
    debugger
    let allUsers = props.state.users.map((user) => {
        return (<UserItem id={user.id} followed={user.followed} key={user.id} photo={user.photos} name={user.name} status={user.status} functions={props} />)
    })
    return (
        <div className={style.users__wrapper}>
            <button onClick={getUsers}>Get users</button>
            {allUsers}
        </div>
    );
};

// export default Users;