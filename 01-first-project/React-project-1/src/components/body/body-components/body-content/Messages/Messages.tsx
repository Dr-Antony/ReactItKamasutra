import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

import { Navigate } from "react-router-dom";

import { Field, reduxForm } from "redux-form";
import { Textarea } from '../../../../common/FormsControl/FormsControl.tsx';
import { required, maxLengthCreator } from '../../../../../utils/validators/validators.ts';
import { InitialStateType } from '../../../../../redux/dialogsReducer';




export type NewMessagesFormType = {
    messageText: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
type NewMessagesFormPropertiesType =Extract<keyof NewMessagesFormType,string>;


type OwnPropsType = {
    dialogsPage: InitialStateType,
    sendMessage:(messageText:string)=>void
}






class DialogForm extends React.Component<NewMessagesFormPropertiesType> {
    render(){
    return (
        <form onSubmit={this.props.handleSubmit} className={style.dialog__window_send}>
                <div>
                    <Field className={style.textArea} component={Textarea} validate={[required , maxLengthCreator(100)]} name={"messageText"} placeholder={"EnterYour message"}/>
                </div>
                <div>
                    <button className={style.button}>Send</button>
                </div>
            </form>
        )
    }
};


const ReduxDialogsForm = reduxForm({
    form: 'dialogs'
})(DialogForm)


class Messages extends React.Component  {
    constructor(props){
        super(props)
    }
    dialogsElements = ()=> {
        return(
            this.props.state.dialogsData.map((d) => {
        return (<DialogItem name={d.name} id={d.id} />)
    })
        )
}
    mesagesElements = () => {
        return(
        this.props.state.messagesData.map((m) => {
        return (<MessageItem message={m.message} />)
    })
    )
}
//Это было по старому (Оставил как наглядный пример логики исполнения процесса)
// ......................................................................
    newMessage = React.createRef();
    onSendMessage = ():NewMessagesFormType => {
        let text = this.newMessage.current.value;
        this.props.sendMessage(text);
    };
    changeText = () => {
        let text = this.newMessage.current.value;
        this.props.chengeTextMessageActionCreator(text);
    };
// ......................................................................
    onSubmit = (data)=> {
        this.props.addMessageActionCreator(data.messageText);
        data.messageText= "";
    }
render(){
    if(!this.props.isAuth){
        return <Navigate to={'/login'}/>
    } 
    return (
        
        <div className={style.messages}>
            <div className={style.dialogs__users_wrapper}>
                <div className={style.dialogs__users_container}>
                    {this.dialogsElements()}
                </div>
            </div>
            <div className={style.dialog__window_wrapper}>
                <div className={style.dialog__window_container} >
                <div className={style.dialog__window_msgs}>
                {this.mesagesElements()}
            </div>
            <ReduxDialogsForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        </div>
    )
}
};

export default Messages;





