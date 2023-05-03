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
            <div className={style.item_container}>
                <div className={style.item_element}>
                    <NavLink to={this.path}>{this.props.name}</NavLink>
                </div>
            </div>
        )
    }
};

export default DialogItem;