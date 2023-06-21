import { ResultCodeEnum, ResultCodeForCaptchaEnum, headerAPI } from "../api/apiOfHeader.ts";
import { authorizeAPI } from "../api/apiOfLogin.ts";

import { stopSubmit } from "redux-form";
import { securityAPI } from "../api/securityAPI.ts";
import { Dispatch } from "react";

import { ThunkAction } from "redux-thunk";



const SET_USER_DATA = 'SET-USER-DATA';
const FETCHING = 'FETCHING';
const INVALID = 'INVALID';
const GET_CAPTCHA = 'GET_CAPTCHA';


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


const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = SetAuthUserDataType|SetFetchingType|SetInvalidDataType|SetCaptchaUrlType;


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
};
export const setFetching = (isFetching: Boolean): SetFetchingType => {
    return { type: FETCHING, isFetching }
};
export type SetInvalidDataType = {
    type: typeof INVALID,
    invalidData: Boolean | any
};
export const setInvalidData = (invalidData: Boolean | any): SetInvalidDataType => {
    return { type: INVALID, invalidData }
};
export type SetCaptchaUrlType = {
    type: typeof GET_CAPTCHA,
    captchaUrl: String | any
};
export const setCaptchaUrl = (captchaUrl: String): SetCaptchaUrlType => {
    return { type: GET_CAPTCHA, captchaUrl }
};

type DispatchType = Dispatch<ActionsTypes>;

export const getMyDataTC = () => {
    return async (dispatch: DispatchType) => {
        dispatch(setFetching(true))
        const data = await headerAPI.getMyData();
        dispatch(setFetching(false));
        let { id,email,login } = data.data;
        if (data.resultCode === ResultCodeEnum.Succes) {
            dispatch(setAuthUserData(id, email, login, true));
        }
        return true;
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: any) => {
    return async (dispatch:any) => {
        let response = await authorizeAPI.login(email, password, rememberMe, captcha)
        debugger
        if (response.data.resultCode === ResultCodeEnum.Succes) {
            dispatch(getMyDataTC())
            dispatch(setInvalidData(false))
        }
        if (response.data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            debugger
            dispatch(getCaptchaUrl())
        }
        if (response.data.resultCode === ResultCodeEnum.Error) {
            dispatch(setInvalidData(true));
            dispatch(stopSubmit("login", { _error: response.data.messages[0] }))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: DispatchType) => {
        const response = await securityAPI.getCaptchaUrl();
        const urlCaptcha = response.data.url;
        debugger
        dispatch(setCaptchaUrl(urlCaptcha))
    }
}



export const logoutTC = () => {
    return async (dispatch: DispatchType) => {
        let response = await authorizeAPI.logout()
        if (response.data.resultCode === ResultCodeEnum.Succes) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authReducer;