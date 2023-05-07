const SET_USER_DATA = 'SET-USER-DATA';

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
                ...action.data
            };
        }
    };
    return state;
};

export const setAuthUserData= (id,email,login) => {
    return { type: SET_USER_DATA, data: {id,email,login} }
};

export default authReducer;