import { profileAPI } from "../api/apiOfProfile";


const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_OF_POST = 'UPDATE-TEXT-OF-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const GET_USER_STATUS = 'SET-USER-STATUS';
const SET_MY_STATUS = 'SET-MY-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES'


let initialState = {
    postsData: [
        { message: 'Hello it my first pussy', likeCount: 5, postId: 1 },
        { message: 'I liked your ass', likeCount: 112, postId: 2 }
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return { ...state, postsData: [...state.postsData, { message: action.textOfNewPost, likeCount: 0 }], newText: '' };;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case GET_USER_STATUS: {
            return { ...state, status: action.statusText }
        }
        case SET_MY_STATUS: {
            return { ...state, status: action.status }
        }
        case DELETE_POST: {
            return { ...state, postsData: state.postsData.filter(p => p.postId != action.postId) }
        }
        case SAVE_PHOTO_SUCCES: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
    };
    return state;
};

export const addPostActionCreator = (text) => {
    return { type: ADD_POST, textOfNewPost: text }
};
export const chengeTextActionCreator = (text) => {
    return { type: UPDATE_TEXT_OF_POST, updateText: text }
};
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
};
export const getUserStatus = (statusText) => {
    return { type: GET_USER_STATUS, statusText }
};
export const updateStatus = (statusText) => {
    return { type: SET_MY_STATUS, statusText }
};
export const deletePost = (postId) => {
    return { type: DELETE_POST, postId }
};
export const savePhotoSucces = (photos) => {
    return { type: SAVE_PHOTO_SUCCES, photos }
};
export const setProfileAC = ()=>{};

















export const getProfileApiTC = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
        debugger
        dispatch(setUserProfile(data))
    }
}
export const getStatusApiTC = (userId) => {
    return async (dispatch) => {
        let statusText = await profileAPI.getStatus(userId);
        debugger
        dispatch(getUserStatus(statusText))
    }
}

export const updateStatusApiTC = (status, userId) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            debugger
            dispatch(updateStatus(status))
        }
        let statusText = await profileAPI.getStatus(userId);
        dispatch(getUserStatus(statusText))
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            debugger
            dispatch(savePhotoSucces(response.data.data.photos))
        }
    }
}

export const setProfileData = (formData,userId) => {
    return async (dispatch) => {
        debugger
        let response = await profileAPI.setProfile(formData)
        if (response.data.resultCode === 0) {
            debugger
            dispatch(setProfileAC())
        }
    }
}




export default profileReducer;