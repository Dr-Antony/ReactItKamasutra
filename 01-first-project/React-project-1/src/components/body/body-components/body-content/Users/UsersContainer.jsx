import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../../../../redux/usersReducer";

let mapStateToProps =(state)=>{
    debugger
    return {
        state: state.usersPage
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
        getUsers: (users)=>{
            dispatch(setUsersAC(users))
        }
    };
};



const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;