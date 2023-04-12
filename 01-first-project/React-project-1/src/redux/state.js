// import { reRender } from "../render";



let store = {
    _state: {
        messagesPage: {
            dialogsData: [
                { id: 0, name: 'Bozhena', messagesData: [
                    { id: 0, message: 'Hello' },
                    { id: 1, message: 'stick your finger in my ass' },
                    { id: 2, message: 'I love you' }
                ]},
                { id: 1, name: 'Sergey',  messagesData: [
                    { id: 0, message: 'Pidaras' },
                    { id: 1, message: 'Can you lent me money?' },
                    { id: 2, message: 'I can suck your dick^)' }
                ] },
                { id: 2, name: 'Vladislav', messagesData: [
                    { id: 0, message: 'Hi' },
                    { id: 1, message: 'Anyone tore my ass' },
                    { id: 2, message: 'At now i feel pain' }
                ]},
                { id: 3, name: 'Anton', messagesData: [
                    { id: 0, message: 'Hihihihih' },
                    { id: 1, message: 'Hahahahaha' },
                    { id: 2, message: 'mmmmmmmmm' }
                ] }, 
                { id: 4, name: 'Alexandr', messagesData: [
                    { id: 0, message: 'Hello' },
                    { id: 1, message: 'My name is Anton, and i have a fear.' },
                    { id: 2, message: 'Why, bro ?' }
                ] }
            ],
            messagesData: [
                { id: 0, message: 'Hello' },
                { id: 1, message: 'My name is Anton, and i have a fear.' },
                { id: 2, message: 'Why, bro ?' }
            ]
        },
        profilePage: {
            postsData: [
                { id: 0, message: 'Hello it my first pussy', likeCount: 5 },
                { id: 1, message: 'I liked your ass', likeCount: 112 }
            ],
            newText: ''
        }
    },
    getState(){
        return this._state
    },
    addPost(textOfNewPost){
        let newPost = {id: this._state.profilePage.postsData.length += 1, message: textOfNewPost, likeCount: 0 };
        this._state.profilePage.postsData.push(newPost);
        this.reRender(this._state);
    },
    updateTextPost (updateText){
        this._state.profilePage.newText= updateText;
        this.reRender(this._state);
    },
    addMessage(textOfNewMessage){
        let newMessage = { id: this._state.messagesPage.dialogsData.length += 1, message: textOfNewMessage };
        this._state.messagesPage.messagesData.push(newMessage);
        this.reRender(this._state);
    },
    reRender(){},
    subscribe (observe){
        this.reRender = observe;
    }
};

export default store;




// let reRender = () => {};
// let state = {
//     messagesPage: {
//         dialogsData: [
//             { id: 0, name: 'Bozhena', messagesData: [
//                 { id: 0, message: 'Hello' },
//                 { id: 1, message: 'stick your finger in my ass' },
//                 { id: 2, message: 'I love you' }
//             ]},
//             { id: 1, name: 'Sergey',  messagesData: [
//                 { id: 0, message: 'Pidaras' },
//                 { id: 1, message: 'Can you lent me money?' },
//                 { id: 2, message: 'I can suck your dick^)' }
//             ] },
//             { id: 2, name: 'Vladislav', messagesData: [
//                 { id: 0, message: 'Hi' },
//                 { id: 1, message: 'Anyone tore my ass' },
//                 { id: 2, message: 'At now i feel pain' }
//             ]},
//             { id: 3, name: 'Anton', messagesData: [
//                 { id: 0, message: 'Hihihihih' },
//                 { id: 1, message: 'Hahahahaha' },
//                 { id: 2, message: 'mmmmmmmmm' }
//             ] }, 
//             { id: 4, name: 'Alexandr', messagesData: [
//                 { id: 0, message: 'Hello' },
//                 { id: 1, message: 'My name is Anton, and i have a fear.' },
//                 { id: 2, message: 'Why, bro ?' }
//             ] }
//         ],
//         messagesData: [
//             { id: 0, message: 'Hello' },
//             { id: 1, message: 'My name is Anton, and i have a fear.' },
//             { id: 2, message: 'Why, bro ?' }
//         ]
//     },
//     profilePage: {
//         postsData: [
//             { id: 0, message: 'Hello it my first pussy', likeCount: 5 },
//             { id: 1, message: 'I liked your ass', likeCount: 112 }
//         ],
//         newText: ''
//     }
// };


// export let addPost = (textOfNewPost) => {
//     let newPost = {id: state.profilePage.postsData.length += 1, message: textOfNewPost, likeCount: 0 };
//     state.profilePage.postsData.push(newPost);
//     reRender(state);
// };
// export let updateTextPost = (updateText) => {
//     state.profilePage.newText= updateText;
//     reRender(state);
// };
// export let addMessage = (textOfNewMessage) => {
//     let newMessage = { id: state.messagesPage.dialogsData.length += 1, message: textOfNewMessage };
//     state.messagesPage.messagesData.push(newMessage);
//     reRender(state);
// };

// export const subscribe = (observe) => {
//     reRender = observe;
// };




// export default state;