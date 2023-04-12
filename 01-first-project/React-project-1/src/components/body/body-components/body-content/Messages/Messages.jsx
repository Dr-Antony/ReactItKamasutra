import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Dialogs from './DialogWindow/DialogWindow';

import { Route, Routes, BrowserRouter } from 'react-router-dom';


const Messages = (props) => {
    let dialogsElements = props.dialogsData.map((d) => {
        return (<DialogItem name={d.name} id={d.id} />)
    });


    let mesagesElements = props.messagesData.map((m) => {
        return (<MessageItem message={m.message} />)
    });

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    };


    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.dialog__window}>
            <div className={style.dialog__window_msgs}>
                {mesagesElements}
            </div>
            <div className={style.dialog__window_send}>
                <div><textarea className={style.textArea} ref={newMessage}></textarea></div>
                <div><button onClick={sendMessage} className={style.button}>Send</button></div>
            </div>
        </div>
        </div>
    );
};

export default Messages;




















    // let dialogWindowRendersArray = props.dialogsData.map((r) => {
    //     let path = '/Messages/' + r.name;
    //     return (<Route path={path} element={<Dialogs messagesData={r.messagesData} addMessage={props.addMessage} />} />)
    // });



    // let routeMesseges = props.dialogsData.map((r)=>{
    //     let pathItem = r.name;
    //     let mesages = r.messagesData.map((m) => {
    //         return (<MessageItem message={m.message} />)
    //     });
    //     return(
    //         <Route path={pathItem} element={mesages} />
    //     );
    // });

    // let mesagesElements = props.dialogsData.messagesData.map((m) => {
    //     return (<MessageItem message={m.message} />)
    // });