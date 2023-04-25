const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_OF_POST = 'UPDATE-TEXT-OF-POST';

let initialState = {
    postsData: [
        { message: 'Hello it my first pussy', likeCount: 5 },
        { message: 'I liked your ass', likeCount: 112 }
    ],
    newText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            // let newPost = { message: action.textOfNewPost, likeCount: 0 };
            // let stateCopy = { ...state, postsData: [...state.postsData, { message: action.textOfNewPost, likeCount: 0 }], newText : ''  };
            // stateCopy.postsData.push(newPost);
            // stateCopy.newText = '';
            return { ...state, postsData: [...state.postsData, { message: action.textOfNewPost, likeCount: 0 }], newText : ''  };;
        }
        case UPDATE_TEXT_OF_POST: {
            // let stateCopy = { ...state, newText : action.updateText};
            // stateCopy.newText = action.updateText;
            return { ...state, newText : action.updateText};
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

export default profileReducer;