import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});

let store = createStore(reducers);

export default store;