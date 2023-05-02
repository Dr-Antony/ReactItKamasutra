import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

class DialogItem extends React.Component {
    constructor(props) {
        super(props)
    }
    path = '/Messages/' + this.props.name;
    render() {
        return (
            <div className={style.item}>
                <NavLink to={this.path}>{this.props.name}</NavLink>
            </div>
        )
    }
};

export default DialogItem;