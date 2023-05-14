import axios from "axios";
import React from "react";
import Users from './UsersClass'

class UsersAPI extends React.Component {
    debugger
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    pageChange = (pageNumber) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    debugger
    render() {
        return (
            <Users pageChange={this.pageChange} state={this.props.state} setUsers={this.props.setUsers} setPage={this.props.setPage} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} follow={this.props.follow} unFollow={this.props.unFollow}/>)
    }
}

export default UsersAPI;








// return (<button className={this.props.currentPage === { p } ? style.selected_page : style.unselected_page} onClick={(e) => { this.pageChange(p) }}>{p}</button>)