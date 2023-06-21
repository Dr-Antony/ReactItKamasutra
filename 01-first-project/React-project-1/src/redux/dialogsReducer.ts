const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_OF_MESSAGE = 'CHANGE-MESSAGE';


type DialogsDataType = {
    id: Number,
    name: String
}
type MessagesDataType = {
    message: String
}
let initialState = {
    dialogsData: [
        { id: 0, name: 'Bozhena' },
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Vladislav' },
        { id: 3, name: 'Anton' },
        { id: 4, name: 'Alexandr' }
    ] as Array<DialogsDataType>,
    messagesData: [
        { message: 'Hello' },
        { message: 'I will fuck your ass!' },
        { message: 'Why, bro ?' }
    ] as Array<MessagesDataType>,
    newText: ''
};

export type InitialStateType = typeof initialState;


const dialogsReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return { ...state, messagesData: [...state.messagesData, { message: action.textOfNewMessage }], newText: '' };
        }
    };
    return state;
};


type ActionsTypes = AddMessageType|ChengeTextMessageType;

export type AddMessageType = {
    type: typeof ADD_MESSAGE,
    textOfNewMessage: String
}
export const addMessageActionCreator = (text: String): AddMessageType => {
    return { type: ADD_MESSAGE, textOfNewMessage: text }
};



// Оставил чтоб в случае чего вспомнить логику выполнения


export type ChengeTextMessageType = {
    type: typeof UPDATE_TEXT_OF_MESSAGE,
    updateText: String
}
export const chengeTextMessageActionCreator = (text: String):ChengeTextMessageType => {
    return { type: UPDATE_TEXT_OF_MESSAGE, updateText: text }
};

export default dialogsReducer;