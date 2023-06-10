import { headerAPI } from "../api/apiOfHeader";
import { authorizeAPI } from "../api/apiOfLogin";

import { stopSubmit } from "redux-form";
import { securityAPI } from "../api/securityAPI";

const SET_USER_DATA = 'SET-USER-DATA';
const FETCHING = 'FETCHING';
const INVALID = 'INVALID';
const GET_CAPTCHA = 'GET_CAPTCHA';
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null,
    invalidData: null,
    captchaUrl: null,
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
        case GET_CAPTCHA:
            return { ...state, captchaUrl: action.captchaUrl }
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
export const setCaptchaUrl = (captchaUrl) => {
    return { type: GET_CAPTCHA, captchaUrl }
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

export const loginTC = (email, password, rememberMe,captcha) => {
    return async (dispatch) => {
        let response = await authorizeAPI.login(email, password, rememberMe,captcha)
        if (response.data.resultCode === 0) {
            dispatch(getMyDataTC())
            dispatch(setInvalidData(false))
        }
        if (response.data.resultCode === 10) {
            debugger
            dispatch(getCaptchaUrl())
        }
        if (response.data.resultCode === 1) {
            dispatch(setInvalidData(true));
            dispatch(stopSubmit("login", { _error: response.data.messages[0] }))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const urlCaptcha = response.data.url;
        debugger
        dispatch(setCaptchaUrl(urlCaptcha))
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