import axios from "axios";
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "./apiOfHeader";




const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" }
});

type LoginResponseType = {
    data:{userId:number},
    resultCode:ResultCodeEnum|ResultCodeForCaptchaEnum,
    messages: Array<string>
}


export const authorizeAPI = {
    login: (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) => {
        return (
            instance.post<LoginResponseType>(`/auth/login`, { email, password, rememberMe, captcha })
        )
    },
    logout: () => {
        return (
            instance.delete(`/auth/login`)
        )
    }
};