import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import style from './Users.module.css';

class Users extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    allUsers = () => {
        return (
            this.props.state.users.map((user) => {
                return (<UserItem id={user.id} followed={user.followed} key={user.id} photo={user.photos} name={user.name} status={user.status} functions={this.props} />)
            })
        )
    };
    pageChange = (pageNumber) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount && i < 11; i++) {
            pages.push(i);
        }
        return (
            <div className={style.users__wrapper}>
                <div className={style.users__container}>
                    {pages.map((p) => {
                        return (<button className={this.props.currentPage ===  p ? style.selected_page : style.unselected_page} onClick={(e) => { this.pageChange(p) }}>{p}</button>)
                    })}
                </div>
                {this.allUsers()}
            </div>
        )
    }
}

export default Users;








// return (<button className={this.props.currentPage === { p } ? style.selected_page : style.unselected_page} onClick={(e) => { this.pageChange(p) }}>{p}</button>)