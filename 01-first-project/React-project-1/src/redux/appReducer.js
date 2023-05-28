
import { getMyDataTC } from "./authReducer";


const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
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

export const setInitialized = () => {
    return { type: SET_INITIALIZED }
};

export const initializeApp = () => {
    return (dispatch) => {
        let promis = dispatch(getMyDataTC())
        debugger
        promis.then(()=>{dispatch(setInitialized())})
    }
}


export default appReducer;