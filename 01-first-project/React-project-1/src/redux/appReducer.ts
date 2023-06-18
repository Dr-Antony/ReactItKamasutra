
import { getMyDataTC } from "./authReducer.ts";


const SET_INITIALIZED = 'SET-INITIALIZED';

export type InitialStateType = {
    initialized: Boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            };
        }
    };
    return state;
};

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = ():SetInitializedType => {
    return { type: SET_INITIALIZED }
};

export const initializeApp = () => {
    return (dispatch: any) => {
        let promis = dispatch(getMyDataTC())
        promis.then(() => { dispatch(setInitialized()) })
    }
}


export default appReducer;