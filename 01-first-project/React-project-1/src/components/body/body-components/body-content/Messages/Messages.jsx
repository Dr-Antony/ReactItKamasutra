import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';





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
    newMessage = React.createRef();
    

    onSendMessage = () => {
        let text = this.newMessage.current.value;
        this.props.sendMessage(text);
    };
    
    changeText = () => {
        let text = this.newMessage.current.value;
        this.props.changeTextMessage(text);
    };
    debugger
render(){
    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {this.dialogsElements()}
            </div>
            <div className={style.dialog__window}>
            <div className={style.dialog__window_msgs}>
                {this.mesagesElements()}
            </div>
            <div className={style.dialog__window_send}>
                <div><textarea className={style.textArea} onChange={this.changeText} ref={this.newMessage} value={this.props.state.newText}></textarea></div>
                <div><button onClick={this.onSendMessage} className={style.button}>Send</button></div>
            </div>
        </div>
        </div>
    )
}
};

export default Messages;







// const Messages = (props) => {
//     let dialogsElements = props.state.dialogsData.map((d) => {
//         return (<DialogItem name={d.name} id={d.id} />)
//     });
//     let mesagesElements = props.state.messagesData.map((m) => {
//         return (<MessageItem message={m.message} />)
//     });
//     let newMessage = React.createRef();
    

//     let onSendMessage = () => {
//         let text = newMessage.current.value;
//         props.sendMessage(text);
//     };
    
//     let changeText = () => {
//         let text = newMessage.current.value;
//         props.changeTextMessage(text);
//     };
//     debugger

//     return (
//         <div className={style.messages}>
//             <div className={style.dialogs}>
//                 {dialogsElements}
//             </div>
//             <div className={style.dialog__window}>
//             <div className={style.dialog__window_msgs}>
//                 {mesagesElements}
//             </div>
//             <div className={style.dialog__window_send}>
//                 <div><textarea className={style.textArea} onChange={changeText} ref={newMessage} value={props.state.newText}></textarea></div>
//                 <div><button onClick={onSendMessage} className={style.button}>Send</button></div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Messages;



















    // let dialogWindowRendersArray = props.dialogsData.map((r) => {
    //     let path = '/Messages/' + r.name;
    //     return (<Route path={path} element={<Dialogs messagesData={r.messagesData} addMessage={props.addMessage} />} />)
    // });



    // let routeMesseges = props.dialogsData.map((r)=>{
    //     let pathItem = r.name;
    //     let mesages = r.messagesData.map((m) => {
    //         return (<MessageItem message={m.message} />)
    //     });
    //     return(
    //         <Route path={pathItem} element={mesages} />
    //     );
    // });

    // let mesagesElements = props.dialogsData.messagesData.map((m) => {
    //     return (<MessageItem message={m.message} />)
    // });