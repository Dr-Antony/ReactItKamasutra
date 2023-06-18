import { usersAPI } from "../api/apiOfUsers";
import { PhotosType } from "../Types/Types";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const FETCHING = 'FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS';


type FollowingProgressType = {
    userId: Number
}



type UsersType = {
    id: Number,
    name: String,
    status: String,
    photos: PhotosType,
    followed: Boolean
}


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [] as Array<FollowingProgressType>
};


export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
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


type FollowType = {
    type: typeof FOLLOW,
    userId: Number
}
export const follow = (userId: Number):FollowType => {
    return { type: FOLLOW, userId }
};


type UnfollowType = {
    type: typeof UNFOLLOW,
    userId: Number
}
export const unfollow = (userId: Number):UnfollowType => {
    return { type: UNFOLLOW, userId }
};


type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UsersType> 
}
export const setUsers = (users:Array<UsersType> ):SetUsersType => {
    return { type: SET_USERS, users }
};


type SetPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: Number
}
export const setPage = (currentPage: Number):SetPageType => {
    return { type: SET_CURRENT_PAGE, currentPage }
};


type SetTotalCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: Number
}
export const setTotalCount = (count: Number):SetTotalCountType => {
    return { type: SET_TOTAL_USERS_COUNT, count }
};


type SetFetchingType = {
    type: typeof FETCHING,
    isFetching: Boolean
}
export const setFetching = (isFetching: Boolean):SetFetchingType => {
    return { type: FETCHING, isFetching }
}


type SetFollowingProgressType = {
    type: typeof FOLLOWING_PROGRESS,
    isFetching: Boolean,
    userId: Number
}
export const setFollowingProgress = (isFetching: Boolean, userId: Number):SetFollowingProgressType => {
    return { type: FOLLOWING_PROGRESS, isFetching, userId }
        ;
}




export const getUsersTC = (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(setFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    }
}




const followUnfollowFlow = async (dispatch:any, usrId:number, apiMethod:any, actionCreator:any) => {
    dispatch(setFollowingProgress(true, usrId))
    let data = await apiMethod(usrId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(usrId))
    }
    dispatch(setFollowingProgress(false, usrId))
};


export const followTC = (usrId:number) => {
    return async (dispatch:any) => {
        dispatch(setFollowingProgress(true, usrId));
        followUnfollowFlow(dispatch, usrId, usersAPI.followUser, follow)
    }
}



export const unfollowTC = (usrId:number) => {
    return async (dispatch:any) => {
        dispatch(setFollowingProgress(true, usrId))
        followUnfollowFlow(dispatch, usrId, usersAPI.unfollowUser, unfollow)
    }
}






export default usersReducer;