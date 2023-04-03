import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';




const Messages = (props) => {
let dialogsElements = props.dialogsData.map((d)=>{
    return ( <DialogItem name={d.name} id={d.id} />)
});
    let mesagesElements = props.messagesData.map((m)=>{
        return ( <MessageItem message={m.message} />)
    });




    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.dialog__window}>
                {mesagesElements}
            </div>
        </div>
    );
};

export default Messages;