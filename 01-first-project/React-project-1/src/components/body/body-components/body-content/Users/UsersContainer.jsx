
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setTotalCount, setFetching } from "../../../../../redux/usersReducer";
import axios from "axios";
import React from "react";
import Users from './UsersClass'
import Preloader from "../../../../common/preloader/preloader";
import { getUsers } from "../../../../../api/api";



class UsersAPI extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setFetching(true)
        getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.setFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }
    pageChange = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setPage(pageNumber)
        getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setFetching(false)
            this.props.setUsers(data.items);
        })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    pageChange={this.pageChange}
                    state={this.props.state}
                    setUsers={this.props.setUsers}
                    setPage={this.props.setPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unfollow} />
            </>)
    }
}


let mapStateToProps = (state) => {
    return {
        state: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};



const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalCount,
    setFetching,
})(UsersAPI)

export default UsersContainer;