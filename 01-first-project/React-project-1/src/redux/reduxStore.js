import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ; //это дообавили для расширения редакс в браузере
// || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))//это дообавили для расширения редакс в браузере

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // это дефолтно было, если что - верни его.

export default store;