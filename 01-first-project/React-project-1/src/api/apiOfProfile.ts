import axios, { AxiosResponse } from "axios";
import { ProfileType } from "../Types/Types";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" }
})


export const profileAPI = {
    getProfile: (userId:number) => {
        return (
            instance.get(`/profile/${userId}`).then(response => response.data)
        )
    },
    getStatus: (userId:number) => {
        return (

            instance.get(`/profile/status/${userId}`).then(response => response.data)
        )

    },
    updateStatus: (status:string) => {
        return (
            instance.put(`/profile/status`, { status: status })
        )
    },
    savePhoto: (photo:any) => {
        const formData = new FormData();
        formData.append('image', photo)
        return (
            instance.put(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    setProfile: (formData:ProfileType) => {
        return (
            instance.put(`/profile`, formData)
        )
    }
};


