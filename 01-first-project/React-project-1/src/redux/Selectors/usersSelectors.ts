import { createSelector } from "reselect";
import { AppStateType } from "../reduxStore";

export const takeState= (state:AppStateType)=> {
    return state.usersPage
};
// const superTakeState = createSelector((state)=>{
//     state.usersPage
// })


export const takePageSize = (state:AppStateType)=> {
    return state.usersPage.pageSize
};
export const takeTotalUsersCount = (state:AppStateType)=>{
    return state.usersPage.totalUsersCount
};
export const takeCurrentPage = (state:AppStateType)=> {
    return state.usersPage.currentPage
}; 
export const takeIsFetching = (state:AppStateType)=>{
    return state.usersPage.isFetching
};
export const takeFollowingProgress = (state:AppStateType)=> {
    return state.usersPage.followingProgress
};