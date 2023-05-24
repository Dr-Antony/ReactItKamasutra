import React from "react";
import style from './Login.module.css';
import { Field, reduxForm } from "redux-form";

import { loginAPI } from "../../../../../api/apiOfLogin";



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.login__container}>
            <div className={style.login__login}>
                <Field placeholder="Email" name={"email"} component={"input"} />
            </div>
            <div className={style.login__password}>
                <Field placeholder="Password" name={"password"} component={"input"} />
            </div>
            <div className={style.login__checkbox}>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
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
    const onSubmit = (formData)=> {
        let {email,password,rememberMe} = formData;
        console.log({email,password,rememberMe})
    }
    return (
        <div className={style.login__wrapper}>
            <ReduxLoginForm  onSubmit={onSubmit} />
        </div>
    )
}
export default Login;