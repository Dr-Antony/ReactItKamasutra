import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';




const Messages = (props) => {


    // let dialogsData = [
    //     { id: 1, name: 'Bozhena' },
    //     { id: 2, name: 'Sergey' },
    //     { id: 3, name: 'Vladislav' },
    //     { id: 4, name: 'Anton' },
    //     { id: 5, name: 'Alexandr' }
    // ];

    
let dialogsElements = props.dialogsData.map((d)=>{
    return ( <DialogItem name={d.name} id={d.id} />)
});



    // let messagesData = [
    //     {id:1, message: 'Hello'},
    //     {id:2, message: 'My name is Anton, and i have a fear.'},
    //     {id:3, message: 'Why, bro ?'}
    // ];
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