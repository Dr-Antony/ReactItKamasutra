import React from "react";
import style from './Login.module.css';
import { Field, reduxForm } from "redux-form";

import { Input } from "../../../../common/FormsControl/FormsControl";
import { required, maxLengthCreator } from "../../../../../utils/validators/validators";
import { loginTC } from "../../../../../redux/authReducer";

import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.login__container}>
            <div className={style.login__login}>
                <Field placeholder="Email" name={"email"} component={Input} validate={[required, maxLengthCreator(30)]} />
            </div>
            <div className={style.login__password}>
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
        await console.log(formData);
        await props.loginTC(email, password, rememberMe);
        await console.log(formData);
    }

    if (props.isAuth) {
        return <Navigate to={'/Profile'}/>
    }
    return (
        <div className={style.login__wrapper}>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { loginTC })(Login);