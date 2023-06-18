import { headerAPI } from "../api/apiOfHeader";
import { authorizeAPI } from "../api/apiOfLogin";

import { stopSubmit } from "redux-form";
import { securityAPI } from "../api/securityAPI";

const SET_USER_DATA = 'SET-USER-DATA';
const FETCHING = 'FETCHING';
const INVALID = 'INVALID';
const GET_CAPTCHA = 'GET_CAPTCHA';

// export type InitialStateType = {
//     id: null | Number,
//     email: null | String,
//     login: null | String,
//     isAuth: Boolean,
//     isFetching: null | Boolean,
//     invalidData: null | any,
//     captchaUrl: null | any,
// }

let initialState = {
    id: null as (null | Number),
    email: null as null | String,
    login: null as null | String,
    isAuth: false as Boolean,
    isFetching: null as null | Boolean,
    invalidData: null as null | any,
    captchaUrl: null as null | any,
};
export type InitialStateType = typeof initialState;


const authReducer = (state = initialState, action: any): InitialStateType => {
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




export type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    data: { id: Number | null, email: String | null, login: String | null, isAuth: Boolean }
}
export const setAuthUserData = (id: Number | null, email: String | null, login: String | null, isAuth: Boolean): SetAuthUserDataType => {
    return { type: SET_USER_DATA, data: { id, email, login, isAuth } }
};


export type SetFetchingType = {
    type: typeof FETCHING,
    isFetching: Boolean
}
export const setFetching = (isFetching: Boolean): SetFetchingType => {
    return { type: FETCHING, isFetching }
}

export type SetInvalidDataType = {
    type: typeof INVALID,
    invalidData: Boolean | any
}
export const setInvalidData = (invalidData: Boolean | any): SetInvalidDataType => {
    return { type: INVALID, invalidData }
}


export type SetCaptchaUrlType = {
    type: typeof GET_CAPTCHA,
    captchaUrl: String | any
}
export const setCaptchaUrl = (captchaUrl: String): SetCaptchaUrlType => {
    return { type: GET_CAPTCHA, captchaUrl }
}



export const getMyDataTC = () => {
    return async (dispatch: any) => {
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

export const loginTC = (email: String, password: String, rememberMe: boolean, captcha: any) => {
    return async (dispatch) => {
        let response = await authorizeAPI.login(email, password, rememberMe, captcha)
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
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl();
        const urlCaptcha = response.data.url;
        debugger
        dispatch(setCaptchaUrl(urlCaptcha))
    }
}



export const logoutTC = () => {
    return async (dispatch: any) => {
        let response = await authorizeAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authReducer;