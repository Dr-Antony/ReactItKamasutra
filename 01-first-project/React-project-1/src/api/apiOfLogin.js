import axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" }
});




export const authorizeAPI = {
    login: (email, password, rememberMe = false) => {
        return (
            instance.post(`/auth/login`, { email, password, rememberMe })
        )
    },
    logout: () => {
        return (
            instance.delete(`/auth/login`)
        )
    }
};