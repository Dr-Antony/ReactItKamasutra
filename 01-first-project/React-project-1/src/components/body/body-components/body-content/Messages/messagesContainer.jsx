import Messages from './Messages';
import { actions } from '../../../../../redux/dialogsReducer.ts';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../../../../../hoc/withAuthRedirect.tsx';
import { compose } from 'redux';







let mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
};

const { addMessageActionCreator,chengeTextMessageActionCreator } = actions;





const MessagesContainer = compose(connect(mapStateToProps,{addMessageActionCreator,chengeTextMessageActionCreator}),withAuthRedirect)(Messages)

export default MessagesContainer;










