import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator } from '../../../../../redux/dialogsReducer';
import { chengeTextMessageActionCreator } from '../../../../../redux/dialogsReducer';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => { dispatch(addMessageActionCreator(text)); },
        changeTextMessage: (text) => {
            let action = chengeTextMessageActionCreator(text);
            dispatch(action);
        }
    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default MessagesContainer;










// const MessagesContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().messagesPage;
//                 let sendMessage = (text) => {
//                     store.dispatch(addMessageActionCreator(text));
//                 };
//                 let changeTextMessage = (text) => {
//                     let action = chengeTextMessageActionCreator(text);
//                     store.dispatch(action);
//                 };
//                 return (
//                     <Messages state={state} sendMessage={sendMessage} changeTextMessage={changeTextMessage} />
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };