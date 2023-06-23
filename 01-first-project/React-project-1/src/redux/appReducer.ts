import { Dispatch } from "react";
import { getMyDataTC } from "./authReducer.ts";
import { AppStateType, InferActionsTypes } from "./reduxStore.js";
import { ThunkAction } from "redux-thunk";


const SET_INITIALIZED = 'SET-INITIALIZED';

export type InitialStateType = typeof initialState

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
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

type ActionsTypes = InferActionsTypes<typeof actions>;


// type ActionsTypes = SetInitializedType;

type SetInitializedType = {
    type: typeof SET_INITIALIZED
}

export const actions = {
    setInitialized : () =>  ({type: SET_INITIALIZED })
}

// export const setInitialized = ():SetInitializedType => {
//     return { type: SET_INITIALIZED }
// };



type ThunkType = ThunkAction<Promise<void>, AppStateType,unknown,ActionsTypes>

type GetStateType = ()=>AppStateType
type DispatchType = Dispatch<ActionsTypes>;

export const initializeApp = () => {
    return (dispatch:DispatchType | any,getState:GetStateType) => {
        let promis = dispatch(getMyDataTC())
        promis.then(() => { dispatch(actions.setInitialized()) })
    }
}


export default appReducer;