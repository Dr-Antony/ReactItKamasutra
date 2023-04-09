import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/Message/" + props.name;
    return (
        <div className={style.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;