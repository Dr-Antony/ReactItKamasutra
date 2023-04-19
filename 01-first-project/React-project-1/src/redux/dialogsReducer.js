const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_OF_MESSAGE =  'CHANGE-MESSAGE';
let initialState = {
    dialogsData: [
        {
            id: 0, name: 'Bozhena', messagesData: [
                { id: 0, message: 'Hello' },
                { id: 1, message: 'stick your finger in my ass' },
                { id: 2, message: 'I love you' }
            ]
        },
        {
            id: 1, name: 'Sergey', messagesData: [
                { id: 0, message: 'Pidaras' },
                { id: 1, message: 'Can you lent me money?' },
                { id: 2, message: 'I can suck your dick^)' }
            ]
        },
        {
            id: 2, name: 'Vladislav', messagesData: [
                { id: 0, message: 'Hi' },
                { id: 1, message: 'Anyone tore my ass' },
                { id: 2, message: 'At now i feel pain' }
            ]
        },
        {
            id: 3, name: 'Anton', messagesData: [
                { id: 0, message: 'Hihihihih' },
                { id: 1, message: 'Hahahahaha' },
                { id: 2, message: 'mmmmmmmmm' }
            ]
        },
        {
            id: 4, name: 'Alexandr', messagesData: [
                { id: 0, message: 'Hello' },
                { id: 1, message: 'My name is Anton, and i have a fear.' },
                { id: 2, message: 'Why, bro ?' }
            ]
        }
    ],
    messagesData: [
        { id: 0, message: 'Hello' },
        { id: 1, message: 'My name is Anton, and i have a fear.' },
        { id: 2, message: 'Why, bro ?' }
    ],
    newText:''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: let newMessage = { id: state.dialogsData.length += 1, message: action.textOfNewMessage };
            state.messagesData.push(newMessage);
            return state;
        case UPDATE_TEXT_OF_MESSAGE: state.newText = action.updateText;
    };
    return state;
};

export const addMessageActionCreator = (text) => {
    return { type: ADD_MESSAGE, textOfNewMessage: text }
};
export const chengeTextMessageActionCreator = (text) => {
    return { type: UPDATE_TEXT_OF_MESSAGE, updateText: text }
};

export default dialogsReducer;