import React from "react";
import { connect } from "react-redux";
import Users from "./UsersClass";
import { followAC, unfollowAC, setUsersAC, setPageAC,setTotalCountAC } from "../../../../../redux/usersReducer";

let mapStateToProps =(state)=>{
    return {
        state: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};
let mapDispatchToProps =(dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unFollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        },
        setPage: (currentPage)=> {
            dispatch(setPageAC(currentPage))
        },
        setTotalUsersCount: (count)=>{
            dispatch(setTotalCountAC(count))
        }
    };
};



const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;