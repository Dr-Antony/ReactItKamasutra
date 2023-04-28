import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer"
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;