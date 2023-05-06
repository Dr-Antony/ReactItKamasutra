const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_OF_POST = 'UPDATE-TEXT-OF-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const ADD_LIKE = 'ADD-LIKE'

let initialState = {
    postsData: [
        { message: 'Hello it my first pussy', likeCount: 5 },
        { message: 'I liked your ass', likeCount: 112 }
    ],
    newText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return { ...state, postsData: [...state.postsData, { message: action.textOfNewPost, likeCount: 0 }], newText : ''  };;
        }
        case UPDATE_TEXT_OF_POST: {
            return { ...state, newText : action.updateText};
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile};
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
export default profileReducer;