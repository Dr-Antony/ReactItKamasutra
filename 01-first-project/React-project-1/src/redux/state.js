import { reRender } from "../render";
let state = {
    messagesPage: {
        dialogsData: [
            { id: 0, name: 'Bozhena' },
            { id: 1, name: 'Sergey' },
            { id: 2, name: 'Vladislav' },
            { id: 3, name: 'Anton' },
            { id: 4, name: 'Alexandr' }
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
};


export let addPost = (textOfNewPost) => {
    let newPost = {id: state.profilePage.postsData.length += 1, message: textOfNewPost, likeCount: 0 };
    state.profilePage.postsData.push(newPost);
    reRender(state);
};
export let updateTextPost = (updateText) => {
    state.profilePage.newText= updateText;
    reRender(state);
};
export let addMessage = (textOfNewMessage) => {
    let newMessage = { id: state.messagesPage.messagesData.length += 1, message: textOfNewMessage };
    state.messagesPage.messagesData.push(newMessage);
    reRender(state);
};

export default state;