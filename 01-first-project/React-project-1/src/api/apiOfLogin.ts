import { instance, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./apiInstance.ts";
import { ResponseType } from "./apiOfHeader.js";




type LoginResponseDataType = {
    userId: number
}


export const authorizeAPI = {
    login: (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) => {
        return (
            instance.post<ResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`/auth/login`, { email, password, rememberMe, captcha })
        )
    },
    logout: () => {
        return (
            instance.delete(`/auth/login`)
        )
    }
};