import { loginAPI } from "../api/apiOfLogin";


c

let initialState = {

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
            
            };
        }
    };
    return state;
};

export const setAuthUserData = (id, email, login) => {
    return { type: SET_USER_DATA, data: { id, email, login } }
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
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}



export default authReducer;