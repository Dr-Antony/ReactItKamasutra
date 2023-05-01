import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";

import style from './Users.module.css';

class Users extends React.Component {
    constructor(props) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    allUsers = () => {
        return (
            this.props.state.users.map((user) => {
                debugger
                return (<UserItem id={user.id} followed={user.followed} key={user.id} photo={user.photos} name={user.name} status={user.status} functions={this.props} />)
            })
        )
    };
    render() {
        return (
            <div className={style.users__wrapper}>
                {this.allUsers()}
            </div>
        )
    }
}

export default Users;