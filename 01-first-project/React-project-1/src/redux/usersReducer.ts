import { Dispatch } from "react";
import { usersAPI } from "../api/apiOfUsers.ts";
import { PhotosType } from "../Types/Types";
import { AppStateType, InferActionsTypes } from "./reduxStore";
import { ThunkAction } from "redux-thunk";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const FETCHING = 'FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS';



type FollowingProgressType = {
    userId: number
};

export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
};

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingProgress: [] as Array<FollowingProgressType> | number | any
};


export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
            return { ...state, followingProgress: action.isFetching ? [...state.followingProgress, action.userId] : state.followingProgress.filter((id: number) => id != action.userId) }
    };
    return state;
};

type ActionsTypes= InferActionsTypes<typeof actions>


export const actions = {
    follow: (userId: number) => {
        return { type: FOLLOW, userId } as const
    },
    unfollow: (userId: number) => {
        return { type: UNFOLLOW, userId } as const
    },
    setUsers: (users: Array<UsersType>) => {
        return { type: SET_USERS, users } as const
    },
    setPage: (currentPage: number) => {
        return { type: SET_CURRENT_PAGE, currentPage } as const
    },
    setTotalCount: (count: number) => {
        return { type: SET_TOTAL_USERS_COUNT, count } as const
    },
    setFetching: (isFetching: boolean) => {
        return { type: FETCHING, isFetching } as const
    },
    setFollowingProgress: (isFetching: boolean, userId: number) => {
        return { type: FOLLOWING_PROGRESS, isFetching, userId } as const
    }
}




type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;


///////////// This first various of typisation of thunk-creator
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(actions.setFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(actions.setFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalCount(data.totalCount))
    }
};
///////////
const _followUnfollowFlow = async (dispatch: DispatchType, usrId: number, apiMethod: any, actionCreator: (usrId: number) => FollowType | UnfollowType) => {
    dispatch(actions.setFollowingProgress(true, usrId))
    let data = await apiMethod(usrId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(usrId))
    }
    dispatch(actions.setFollowingProgress(false, usrId))
};
export const followTC = (usrId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setFollowingProgress(true, usrId));
        _followUnfollowFlow(dispatch, usrId, usersAPI.followUser, actions.follow)
    }
};
export const unfollowTC = (usrId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setFollowingProgress(true, usrId))
        _followUnfollowFlow(dispatch, usrId, usersAPI.unfollowUser, actions.unfollow)
    }
};



export default usersReducer;