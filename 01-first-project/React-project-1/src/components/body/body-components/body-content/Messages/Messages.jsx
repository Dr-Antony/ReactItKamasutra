import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';


const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={style.item + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
};

const Messages = () => {
    let dialogsData = [
        { id: 1, name: 'Bozhena' },
        { id: 2, name: 'Sergey' },
        { id: 3, name: 'Vladislav' },
        { id: 4, name: 'Anton' },
        { id: 5, name: 'Alexandr' }
    ];
let dialogsElements = dialogsData.map((d)=>{
    return ( <DialogItem name={d.name} id={d.id} />)
});
    let messagesData = [
        {id:1, message: 'Hello'},
        {id:2, message: 'My name is Anton, and i have a fear.'},
        {id:3, message: 'Why, bro ?'}
    ];
    let mesagesElements = messagesData.map((m)=>{
        return ( <Message message={m.message} />)
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