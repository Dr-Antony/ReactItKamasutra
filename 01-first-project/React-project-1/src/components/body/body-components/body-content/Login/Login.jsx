import React from "react";
import style from './Login.module.css';
import { Field, reduxForm } from "redux-form";

import { Input } from "../../../../common/FormsControl/FormsControl";
import { required, maxLengthCreator } from "../../../../../utils/validators/validators";
import { loginTC } from "../../../../../redux/authReducer";

import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit} className={ style.login__container }>
            {props.error? <div className={style.error_error}><span>{props.error}</span></div>: null}
            <div className={!props.invalidData ? style.login__login : (style.login__login + ' ' + style.error )}>
                <Field placeholder="Email" name={"email"} component={Input} validate={[required, maxLengthCreator(30)]} />
            </div>
            <div className={!props.invalidData ? style.login__password : (style.login__password + ' ' + style.error )}>
                <Field placeholder="Password" name={"password"} component={Input} validate={[required, maxLengthCreator(30)]} />
            </div>
            <div className={style.login__checkbox}>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            <div className={style.login__button}>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = async (formData) => {
        let { email, password, rememberMe } = formData;
        await props.loginTC(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={'/Profile'}/>
    }
    return (
        <div className={style.login__wrapper}>
            <ReduxLoginForm onSubmit={onSubmit} invalidData={props.invalidData} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        invalidData: state.auth.invalidData
    }
};

export default connect(mapStateToProps, { loginTC })(Login);