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
    let messagesData = [
        {id:1, message: 'Hello'},
        {id:2, message: 'My name is Anton, and i have a fear.'},
        {id:3, message: 'Why, bro ?'}
    ];

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={style.dialog__window}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
};

export default Messages;