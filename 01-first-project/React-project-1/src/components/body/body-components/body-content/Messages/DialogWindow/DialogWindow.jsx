import React from 'react';
import style from './DialogWindow.module.css';
import MessageItem from '../MessageItem/MessageItem';

const Dialogs = (props) => {
    let mesagesElements = props.messagesData.map((m) => {
        return (<MessageItem message={m.message} />)
    });

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    };

    return (
        <div className={style.dialog__window}>
            <div className={style.dialog__window_msgs}>
                {mesagesElements}
            </div>
            <div className={style.dialog__window_send}>
                <div><textarea className={style.textArea} ref={newMessage}></textarea></div>
                <div><button onClick={sendMessage} className={style.button}>Send</button></div>
            </div>
        </div>
    );
};

export default Dialogs;