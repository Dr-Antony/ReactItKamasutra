import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action);
        this.reRender(this._state);
    }
};



export default store;




// S. Принцип единственной ответственности(Single responsibility)
// O. Принцип открытости/закрытости (Open-closed)
// L. Принцип подстановки Барбары Лисков (Liskov substitution)
// I. Принцип разделения интерфейса (Interface segregation)
// D. Принцип инверсии зависимостей (Dependency Invertion)