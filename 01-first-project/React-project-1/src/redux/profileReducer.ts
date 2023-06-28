import { Dispatch } from "react";
import { profileAPI } from "../api/apiOfProfile.ts";
import { PhotosType, ProfileType } from "../Types/Types";
import { BaseThunkType, InferActionsTypes } from "./reduxStore.js";
import { FormAction } from "redux-form";


const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_OF_POST = 'UPDATE-TEXT-OF-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const GET_USER_STATUS = 'SET-USER-STATUS';
const SET_MY_STATUS = 'SET-MY-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES'





type PostsDataType = {
    message: String,
    likeCount: Number,
    postId: Number
}






let initialState = {
    postsData: [
        { message: 'Hello it my first pussy', likeCount: 5, postId: 1 },
        { message: 'I liked your ass', likeCount: 112, postId: 2 }
    ] as Array<PostsDataType>,
    profile: null as null | ProfileType,
    status: null as null | any,
    newText: null as null | String
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return { ...state, postsData: [...state.postsData, { message: action.textOfNewPost, likeCount: 0, postId: state.postsData.length++ }], newText: '' };;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case GET_USER_STATUS: {
            return { ...state, status: action.statusText }
        }
        case SET_MY_STATUS: {
            return { ...state, status: action.statusText }
        }
        case DELETE_POST: {
            return { ...state, postsData: state.postsData.filter(p => p.postId != action.postId) }
        }
        case SAVE_PHOTO_SUCCES: {
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }
    };
    return state;
};


type ThunkType = BaseThunkType<ActionsTypes|FormAction>
type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    addPostActionCreator: (text: String) => {
        return { type: ADD_POST, textOfNewPost: text } as const
    },
    chengeTextActionCreator: (text: String) => {
        return { type: UPDATE_TEXT_OF_POST, updateText: text } as const
    },
    setUserProfile: (profile: ProfileType) => {
        return { type: SET_USER_PROFILE, profile } as const
    },
    getUserStatus: (statusText: String) => {
        return { type: GET_USER_STATUS, statusText } as const
    },
    updateStatus: (statusText: String) => {
        return { type: SET_MY_STATUS, statusText } as const
    },
    deletePost: (postId: Number) => {
        return { type: DELETE_POST, postId } as const
    },
    savePhotoSucces: (photos: PhotosType) => {
        return { type: SAVE_PHOTO_SUCCES, photos } as const
    }
}


type DispatchType = Dispatch<ActionsTypes>;





export const getProfileApiTC = (userId: number):ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
        dispatch(actions.setUserProfile(data))
    }
}
export const getStatusApiTC = (userId: number):ThunkType => {
    return async (dispatch: DispatchType) => {
        let statusText = await profileAPI.getStatus(userId);
        dispatch(actions.getUserStatus(statusText))
    }
}

export const updateStatusApiTC = (status: string, userId: number):ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(actions.updateStatus(status))
        }
        let statusText = await profileAPI.getStatus(userId);
        dispatch(actions.getUserStatus(statusText))
    }
}
export const savePhoto = (file: File):ThunkType => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            debugger
            dispatch(actions.savePhotoSucces(response.data.data.photos))
        }
    }
}

export const setProfileData = (formData: any):ThunkType => {
    return async (dispatch) => {
        debugger
        let response = await profileAPI.setProfile(formData)
        dispatch(setProfileData(response.data))
    }
}




export default profileReducer;











// type ActionsTypes = AddPostType|ChengeTextType|SetUserProfileType|GetUserStatusType|UpdateStatusType|DeletePostType|SavePhotoSuccesType;



// type AddPostType = {
//     type: typeof ADD_POST,
//     textOfNewPost: String
// }
// export const addPostActionCreator = (text: String): AddPostType => {
//     return { type: ADD_POST, textOfNewPost: text }
// };


// type ChengeTextType = {
//     type: typeof UPDATE_TEXT_OF_POST,
//     updateText: String
// }
// export const chengeTextActionCreator = (text: String): ChengeTextType => {
//     return { type: UPDATE_TEXT_OF_POST, updateText: text }
// };


// type SetUserProfileType = {
//     type: typeof SET_USER_PROFILE,
//     profile: ProfileType
// }
// export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
//     return { type: SET_USER_PROFILE, profile }
// };


// type GetUserStatusType = {
//     type: typeof GET_USER_STATUS,
//     statusText: String
// }
// export const getUserStatus = (statusText: String): GetUserStatusType => {
//     return { type: GET_USER_STATUS, statusText }
// };


// type UpdateStatusType = {
//     type: typeof SET_MY_STATUS,
//     statusText: String
// }
// export const updateStatus = (statusText: String): UpdateStatusType => {
//     return { type: SET_MY_STATUS, statusText }
// };


// type DeletePostType = {
//     type: typeof DELETE_POST,
//     postId: Number
// }
// export const deletePost = (postId: Number): DeletePostType => {
//     return { type: DELETE_POST, postId }
// };


// type SavePhotoSuccesType = {
//     type: typeof SAVE_PHOTO_SUCCES,
//     photos: PhotosType
// }
// export const savePhotoSucces = (photos: PhotosType): SavePhotoSuccesType => {
//     return { type: SAVE_PHOTO_SUCCES, photos }
// };



