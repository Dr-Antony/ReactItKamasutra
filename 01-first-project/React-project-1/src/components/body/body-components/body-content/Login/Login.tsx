import React from "react";
import style from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import classNames from "classnames";
import { Input, createField } from "../../../../common/FormsControl/FormsControl.tsx";
import { required, maxLengthCreator } from "../../../../../utils/validators/validators.ts";
import { loginTC } from "../../../../../redux/authReducer.ts";

import { connect, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../../../../redux/reduxStore";


type OwnProps = {
    invalidData: boolean,
    captchaUrl: string
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, OwnProps> & OwnProps> = ({ handleSubmit, error, invalidData, captchaUrl }) => {
    const validInvalid = classNames(style.login__login, { [style.error]: invalidData }) // Это пример как работать с клааснеймами через одноименную библиотеку. Очень удобно.
    debugger
    return (
        <form onSubmit={handleSubmit} className={style.login__container}>
            {error ? <div className={style.error_error}><span>{error}</span></div> : null}
            {/* <div className={!props.invalidData ? style.login__login : (style.login__login + ' ' + style.error )}> */}
            {/* <div  className={validInvalid}>{createField<LoginFormPropertiesType>("Email","email",[required],Input)}</div> */} {/* Созданный при помощи createField инпут для email. Я исправил ошибки и он теперь работает. */}
            <div className={validInvalid}>
                <Field placeholder="Email" name={"email"} component={Input} validate={[required, maxLengthCreator(30)]} />
            </div>
            <div className={!invalidData ? style.login__password : (style.login__password + ' ' + style.error)}>
                <Field placeholder="Password" name={"password"} component={Input} validate={[required, maxLengthCreator(30)]} />
            </div>
            <div className={style.login__checkbox}>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> <b>remember me</b>
            </div>
            {captchaUrl && <div className={style.login__captcha}><img src={captchaUrl} /></div>}
            {captchaUrl && <div className={style.login__captcha_input}><Field placeholder="Symbols" name={"captcha"} component={Input} validate={[required]} /></div>}
            <div className={style.login__button}>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<LoginFormValuesType, OwnProps>({
    form: 'login'
})(LoginForm)


///////////////////////////////////////
export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}
type LoginFormPropertiesType = Extract<keyof LoginFormValuesType, string>;
///////////////////////////////////////


const Login: React.FC = ({loginTC}) => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const invalidData = useSelector((state: AppStateType) => state.auth.invalidData);

    const dispatch = useDispatch()//не получилось 


    const onSubmit = (formData: LoginFormValuesType) => {
        let { email, password, rememberMe, captcha } = formData;
        loginTC(email, password, rememberMe, captcha);
    }
    if (isAuth) {
        return <Navigate to={'/Profile'} />
    }
    return (
        <div className={style.login__wrapper}>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} invalidData={invalidData} />
        </div>
    )
}









// type MapSDispatchPropsType = {
//     loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
// }



// let mapStateToProps = (state: any)=> {
// };

export default connect(null, { loginTC })(Login);