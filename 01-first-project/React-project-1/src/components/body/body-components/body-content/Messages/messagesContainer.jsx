import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator } from '../../../../../redux/dialogsReducer';
import { chengeTextMessageActionCreator } from '../../../../../redux/dialogsReducer';



const MessagesContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let sendMessage = (text) => {
        props.store.dispatch(addMessageActionCreator(text));
    };
    let changeTextMessage = (text)=> {
        let action = chengeTextMessageActionCreator(text);
        props.store.dispatch(action);
    };
    return (
        <Messages state={state} sendMessage={sendMessage} changeTextMessage={changeTextMessage} />
    );
};

export default MessagesContainer;