import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={style.item + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;