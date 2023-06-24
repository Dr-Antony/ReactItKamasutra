import React from 'react';
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';



let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};


export const withAuthRedirect = (Component) => {
    let redirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'} />
        return <Component {...props} />
    }
    return connect(mapStateToPropsRedirect,{})(redirectComponent) 
}