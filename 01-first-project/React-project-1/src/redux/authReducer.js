import { headerAPI } from "../api/apiOfHeader";
import { authorizeAPI } from "../api/apiOfLogin";

const SET_USER_DATA = 'SET-USER-DATA';
const FETCHING = 'FETCHING';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                // isAuth: true
            };
        }
        case FETCHING:
            return { ...state, isFetching: action.isFetching }
    };
    return state;
};

export const setAuthUserData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { id, email, login,isAuth } }
};
export const setFetching = (isFetching) => {
    return { type: FETCHING, isFetching }
}


export const getMyDataTC = () => {
    return (dispatch) => {
        dispatch(setFetching(true))
        headerAPI.getMyData()
            .then(data => {
                dispatch(setFetching(false))
                let { id, email, login } = data.data;
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login,true))
                }
            })
    }
}

export const loginTC = (email,password,rememberMe) => {
    return (dispatch) => {
        authorizeAPI.login(email,password,rememberMe)
        .then((response)=> {
            if(response.data.resultCode === 0) {
                dispatch(getMyDataTC())
            }
        })
    }
}
export const logoutTC = () => {
    return (dispatch) => {
        authorizeAPI.logout()
        .then((response)=> {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null,false))
            }
        })
    }
}


export default authReducer;