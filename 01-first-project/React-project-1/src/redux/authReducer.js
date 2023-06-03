import { headerAPI } from "../api/apiOfHeader";
import { authorizeAPI } from "../api/apiOfLogin";

import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'SET-USER-DATA';
const FETCHING = 'FETCHING';
const INVALID = 'INVALID';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null,
    invalidData: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            };
        }
        case FETCHING:
            return { ...state, isFetching: action.isFetching }
        case INVALID:
            return { ...state, invalidData: action.invalidData }
    };
    return state;
};

export const setAuthUserData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { id, email, login, isAuth } }
};
export const setFetching = (isFetching) => {
    return { type: FETCHING, isFetching }
}
export const setInvalidData = (invalidData) => {
    return { type: INVALID, invalidData }
}



export const getMyDataTC = () => {
    return async (dispatch) => {
        dispatch(setFetching(true))
        const data = await headerAPI.getMyData();
        dispatch(setFetching(false));
        let { id, email, login } = data.data;
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true));
        }
        return true;
    }
}

export const loginTC = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authorizeAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getMyDataTC())
            dispatch(setInvalidData(false))
        }
        if (response.data.resultCode === 1) {
            dispatch(setInvalidData(true));
            dispatch(stopSubmit("login", { _error: response.data.messages[0] }))
        }
    }
}
export const logoutTC = () => {
    return async (dispatch) => {
        let response = await authorizeAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authReducer;