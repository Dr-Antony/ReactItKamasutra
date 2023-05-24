import Messages from './Messages';
import { addMessageActionCreator,chengeTextMessageActionCreator } from '../../../../../redux/dialogsReducer';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../../../../../hoc/withAuthRedirect.tsx';
import { compose } from 'redux';







let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
};







const MessagesContainer = compose(connect(mapStateToProps,{addMessageActionCreator,chengeTextMessageActionCreator}),withAuthRedirect)(Messages)

export default MessagesContainer;










