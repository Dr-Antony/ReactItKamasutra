import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator } from '../../../../../redux/dialogsReducer';
import { chengeTextMessageActionCreator } from '../../../../../redux/dialogsReducer';
import { connect } from 'react-redux';


import { withAuthRedirect } from '../../../../../hoc/withAuthRedirect.tsx';



let AuthRedirectComponent = withAuthRedirect(Messages)






let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
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






const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default MessagesContainer;










