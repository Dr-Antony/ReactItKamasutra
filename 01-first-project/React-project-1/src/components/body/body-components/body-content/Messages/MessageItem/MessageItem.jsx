import React from 'react';
import style from './MessageItem.module.css'



class MessageItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style.message_container}>
                <div className={style.message}>{this.props.message}</div>
            </div>
            
        )
    }
}

export default MessageItem;