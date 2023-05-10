
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setTotalCount, setFetching } from "../../../../../redux/usersReducer";
import React from "react";
import Users from './UsersClass'
import Preloader from "../../../../common/preloader/preloader";
import { usersAPI } from "../../../../../api/apiOfUsers";



class UsersAPI extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            debugger
            this.props.setFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }
    pageChange = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            debugger
            this.props.setFetching(false)
            this.props.setUsers(data.items);
        })
    }
    unfollowUsr = (usrId) => {
        usersAPI.unfollorUser(usrId)
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    this.props.unfollow(usrId)
                }
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    unfollowUsr={this.unfollowUsr}
                    pageChange={this.pageChange}
                    state={this.props.state}
                    setUsers={this.props.setUsers}
                    setPage={this.props.setPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                />
            </>)
    }
}
// unFollow={this.props.unfollow}

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