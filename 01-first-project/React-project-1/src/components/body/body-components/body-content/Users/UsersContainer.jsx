
import { connect } from "react-redux";
import { setUsers, setPage, setFollowingProgress, getUsersTC, followTC, unfollowTC } from "../../../../../redux/usersReducer.ts";
import React from "react";
import Users from './Users'
import Preloader from "../../../../common/preloader/preloader";
import { takeCurrentPage, takeFollowingProgress, takeIsFetching, takePageSize, takeState, takeTotalUsersCount } from "../../../../../redux/Selectors/usersSelectors";



class UsersAPI extends React.Component {
    constructor(props) {
        super(props)
    }



    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    pageChange = (pageNumber) => {
        this.props.setPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }
    unfollowUsr =  (usrId) => {
        this.props.unfollowTC(usrId)
    }
    followUsr = (usrId) => {
        this.props.followTC(usrId)
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

let mapStateToProps = (state) => {
    return {
        state: takeState(state),
        pageSize: takePageSize(state),
        totalUsersCount: takeTotalUsersCount(state),
        currentPage: takeCurrentPage(state),
        isFetching: takeIsFetching(state),
        followingProgress: takeFollowingProgress(state)
    };
};



const UsersContainer = connect(mapStateToProps, {
    setUsers,
    setPage,
    setFollowingProgress,
    getUsersTC, followTC, unfollowTC
})(UsersAPI)

export default UsersContainer;