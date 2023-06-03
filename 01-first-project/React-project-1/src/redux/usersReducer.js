import { usersAPI } from "../api/apiOfUsers";



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const FETCHING = 'FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case FETCHING:
            return { ...state, isFetching: action.isFetching }
        case FOLLOWING_PROGRESS:
            return { ...state, followingProgress: action.isFetching ? [...state.followingProgress, action.userId] : state.followingProgress.filter(id => id != action.userId) }
    };
    return state;
};



export const follow = (userId) => {
    return { type: FOLLOW, userId }
};
export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
};
export const setUsers = (users) => {
    return { type: SET_USERS, users }
};
export const setPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
};
export const setTotalCount = (count) => {
    return { type: SET_TOTAL_USERS_COUNT, count }
};
export const setFetching = (isFetching) => {
    return { type: FETCHING, isFetching }
}
export const setFollowingProgress = (isFetching, userId) => {
    return { type: FOLLOWING_PROGRESS, isFetching, userId }
        ;
}




export const getUsersTC = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    }
}




const followUnfollowFlow = async (dispatch, usrId, apiMethod, actionCreator) => {
    dispatch(setFollowingProgress(true, usrId))
    let data = await apiMethod(usrId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(usrId))
    }
    dispatch(setFollowingProgress(false, usrId))
};


export const followTC = (usrId) => {
    return async (dispatch) => {
        dispatch(setFollowingProgress(true, usrId));
        followUnfollowFlow(dispatch, usrId, usersAPI.followUser, follow)
    }
}



export const unfollowTC = (usrId) => {
    return async (dispatch) => {
        dispatch(setFollowingProgress(true, usrId))
        followUnfollowFlow(dispatch, usrId, usersAPI.unfollowUser, unfollow)
    }
}






export default usersReducer;