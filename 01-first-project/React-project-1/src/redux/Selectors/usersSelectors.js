import { createSelector } from "reselect";

export const takeState= (state)=> {
    return state.usersPage
};
// const superTakeState = createSelector((state)=>{
//     state.usersPage
// })


export const takePageSize = (state)=> {
    return state.usersPage.pageSize
};
export const takeTotalUsersCount = (state)=>{
    return state.usersPage.totalUsersCount
};
export const takeCurrentPage = (state)=> {
    return state.usersPage.currentPage
}; 
export const takeIsFetching = (state)=>{
    return state.usersPage.isFetching
};
export const takeFollowingProgress = (state)=> {
    return state.usersPage.followingProgress
};