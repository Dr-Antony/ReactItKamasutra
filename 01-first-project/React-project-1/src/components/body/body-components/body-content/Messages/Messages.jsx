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
    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                <DialogItem name="Bozhena" id="1"/>
                <DialogItem name="Sergey" id="2"/>
                <DialogItem name="Vladislav" id="3"/>
                <DialogItem name="Anton" id="4"/>
                <DialogItem name="Alexandr" id="5"/>
            </div>
            <div className={style.dialog__window}>
                <Message message="Hello"/>
                <Message message="My name is Anton, and i have a fear."/>
                <Message message="Why, bro ?"/>
            </div>
        </div>
    );
};

export default Messages;