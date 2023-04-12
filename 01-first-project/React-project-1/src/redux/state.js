let store = {
    _state: {
        messagesPage: {
            dialogsData: [
                {
                    id: 0, name: 'Bozhena', messagesData: [
                        { id: 0, message: 'Hello' },
                        { id: 1, message: 'stick your finger in my ass' },
                        { id: 2, message: 'I love you' }
                    ]
                },
                {
                    id: 1, name: 'Sergey', messagesData: [
                        { id: 0, message: 'Pidaras' },
                        { id: 1, message: 'Can you lent me money?' },
                        { id: 2, message: 'I can suck your dick^)' }
                    ]
                },
                {
                    id: 2, name: 'Vladislav', messagesData: [
                        { id: 0, message: 'Hi' },
                        { id: 1, message: 'Anyone tore my ass' },
                        { id: 2, message: 'At now i feel pain' }
                    ]
                },
                {
                    id: 3, name: 'Anton', messagesData: [
                        { id: 0, message: 'Hihihihih' },
                        { id: 1, message: 'Hahahahaha' },
                        { id: 2, message: 'mmmmmmmmm' }
                    ]
                },
                {
                    id: 4, name: 'Alexandr', messagesData: [
                        { id: 0, message: 'Hello' },
                        { id: 1, message: 'My name is Anton, and i have a fear.' },
                        { id: 2, message: 'Why, bro ?' }
                    ]
                }
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
    getState() {
        return this._state
    },
    reRender() { },
    subscribe(observe) {
        this.reRender = observe;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = { id: this._state.profilePage.postsData.length += 1, message: action.textOfNewPost, likeCount: 0 };
            this._state.profilePage.postsData.push(newPost);
            this.reRender(this._state);
        }
        else if (action.type === 'UPDATE-TEXT-OF-POST') {
            this._state.profilePage.newText = action.updateText;
            this.reRender(this._state);
        }
        else if (action.type === 'ADD-MESSAGE'){
            let newMessage = { id: this._state.messagesPage.dialogsData.length += 1, message: action.textOfNewMessage };
            this._state.messagesPage.messagesData.push(newMessage);
            this.reRender(this._state);
        }
    }
};

export default store;
