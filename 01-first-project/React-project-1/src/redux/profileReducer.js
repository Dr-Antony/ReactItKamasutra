import { profileAPI } from "../api/apiOfProfile";


const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_OF_POST = 'UPDATE-TEXT-OF-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const GET_USER_STATUS = 'SET-USER-STATUS';
const SET_MY_STATUS = 'SET-MY-STATUS';
const DELETE_POST = 'DELETE-POST'

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
            return { ...state, postsData: state.postsData.filter(p=>p.postId != action.postId) }
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



export const getProfileApiTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then((data) => {
            debugger
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatusApiTC = (userId) => {
    
    return (dispatch) => {
        profileAPI.getStatus(userId).then((statusText) => {
            debugger
            dispatch(getUserStatus(statusText))
            
        })
    }
}

export const updateStatusApiTC = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(updateStatus(status))
            }
        })
    }
}






export default profileReducer;