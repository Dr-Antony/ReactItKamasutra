import { instance  } from "./apiInstance.ts";



export  const securityAPI = {
    getCaptchaUrl : () => {
        debugger
        return (
            instance.get(`/security/get-captcha-url`)
        )
    }
};


