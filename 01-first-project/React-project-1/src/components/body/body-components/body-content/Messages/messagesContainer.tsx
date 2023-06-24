import Messages from './Messages.tsx';
import { actions } from '../../../../../redux/dialogsReducer.ts';
import { connect } from 'react-redux';

import { withAuthRedirect } from '../../../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../../../../redux/reduxStore.ts';






let mapStateToProps = (state:AppStateType) => {
    return {
        state: state.messagesPage,
    }
};

const { addMessageActionCreator,chengeTextMessageActionCreator } = actions;





const MessagesContainer = compose(connect(mapStateToProps,{addMessageActionCreator,chengeTextMessageActionCreator}),withAuthRedirect)(Messages) as React.ComponentType

export default MessagesContainer;










