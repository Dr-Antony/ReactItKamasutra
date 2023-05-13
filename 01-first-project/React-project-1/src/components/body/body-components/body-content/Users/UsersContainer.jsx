
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setTotalCount, setFetching, setFollowingProgress } from "../../../../../redux/usersReducer";
import React from "react";
import Users from './Users'
import Preloader from "../../../../common/preloader/preloader";
import { usersAPI } from "../../../../../api/apiOfUsers";



class UsersAPI extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }
    pageChange = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setFetching(false)
            this.props.setUsers(data.items);
        })
    }
    unfollowUsr = async (usrId) => {
        this.props.setFollowingProgress(true, usrId);
        usersAPI.unfollowUser(usrId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(usrId)
                    this.props.setFollowingProgress(false, usrId);
                }
            })
    }
    followUsr = (usrId) => {
        this.props.setFollowingProgress(true, usrId);
        usersAPI.followUser(usrId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(usrId)
                    this.props.setFollowingProgress(false, usrId);
                }
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    unfollowUsr={this.unfollowUsr}
                    followUsr={this.followUsr}

                    pageChange={this.pageChange}
                    state={this.props.state}
                    setUsers={this.props.setUsers}
                    setPage={this.props.setPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    setFollowingProgress={this.props.setFollowingProgress}
                    followingProgress={this.props.followingProgress}
                    
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
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    };
};



const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalCount,
    setFetching,
    setFollowingProgress
})(UsersAPI)

export default UsersContainer;