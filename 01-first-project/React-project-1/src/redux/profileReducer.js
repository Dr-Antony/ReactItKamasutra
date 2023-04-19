const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_OF_POST = 'UPDATE-TEXT-OF-POST';

let initialState = {
    postsData: [
        { id: 0, message: 'Hello it my first pussy', likeCount: 5 },
        { id: 1, message: 'I liked your ass', likeCount: 112 }
    ],
    newText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: let newPost = { id: state.postsData.length += 1, message: action.textOfNewPost, likeCount: 0 };
            state.postsData.push(newPost);
            return state;
        case UPDATE_TEXT_OF_POST: state.newText = action.updateText;
        
        return state;
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