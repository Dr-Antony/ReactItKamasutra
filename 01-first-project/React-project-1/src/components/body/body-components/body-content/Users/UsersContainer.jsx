
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setPageAC, setTotalCountAC, setFetchingAC } from "../../../../../redux/usersReducer";
import axios from "axios";
import React from "react";
import Users from './UsersClass'
import Preloader from "../../../../common/preloader/preloader";


class UsersAPI extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    pageChange = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    pageChange={this.pageChange}
                    state={this.props.state}
                    setUsers={this.props.setUsers}
                    setPage={this.props.setPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow} />
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
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (currentPage) => {
            dispatch(setPageAC(currentPage))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalCountAC(count))
        },
        setFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching))
        }
    };
};



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer;