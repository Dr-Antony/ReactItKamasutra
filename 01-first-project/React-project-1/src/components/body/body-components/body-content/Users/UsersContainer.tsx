
import { connect } from "react-redux";
import { setUsers, setPage, setFollowingProgress, getUsersTC, followTC, unfollowTC } from "../../../../../redux/usersReducer.ts";
import React from "react";
import Users from './Users.tsx';
import Preloader from "../../../../common/preloader/preloader.jsx";
import { takeCurrentPage, takeFollowingProgress, takeIsFetching, takePageSize, takeState, takeTotalUsersCount } from "../../../../../redux/Selectors/usersSelectors.ts";


import { AppStateType } from "../../../../../redux/reduxStore.js";




type PropsType = {
    state: any,
    currentPage: number,
    pageSize: number,
    setUsers: any,
    setPage: any,
    setFollowingProgress: any,
    getUsersTC: (currentPage: number, pageSize: number) => void,
    totalUsersCount: number,
    follow: () => void,
    unfollowTC: any,
    followTC: any,
    followingProgress: Array<number>,
    isFetching: boolean,
    pageChange: any
}


// type PropsType = MapStatePropsType & MapDispatchType;




class UsersAPI extends React.Component<PropsType> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    pageChange = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }
    unfollowUsr = (usrId: number) => {
        this.props.unfollowTC(usrId)
    }
    followUsr = (usrId: number) => {
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








// type MapStatePropsType = {
//     state: (state: AppStateType) => { state: AppStateType },
//     pageSize: (state: AppStateType) => { pageSize: number },
//     totalUsersCount: (state: AppStateType) => { totalUsersCount: number },
//     currentPage: (state: AppStateType) => { currentPage: number },
//     isFetching: (state: AppStateType) => { isFetching: boolean },
//     followingProgress: (state: AppStateType) => { followingProgress: Array<number> }
// }

let mapStateToProps = (state: AppStateType) => {
    return {
        state: takeState(state),
        pageSize: takePageSize(state),
        totalUsersCount: takeTotalUsersCount(state),
        currentPage: takeCurrentPage(state),
        isFetching: takeIsFetching(state),
        followingProgress: takeFollowingProgress(state)
    };
};
type MapDispatchType = {
    setUsers:()=>void,
    setPage:()=>void,
    setFollowingProgress:()=>void,
    getUsersTC:()=>void,
    followTC:()=>void,
    unfollowTC:()=>void
}

//@ts-ignore
const UsersContainer = connect(mapStateToProps, {
    setUsers,
    setPage,
    setFollowingProgress,
    getUsersTC, followTC, unfollowTC
})(UsersAPI)
//@ts-ignore
export default UsersContainer;