import { instance } from "./apiInstance.ts";
import { PhotosType, ProfileType } from "../Types/Types";
import { ResponseType } from "./apiOfHeader.js";






export const profileAPI = {
    getProfile: (userId: number) => {
        return (
            instance.get<ProfileType>(`/profile/${userId}`).then(response => response.data)
        )
    },
    getStatus: (userId: number) => {
        return (

            instance.get<string>(`/profile/status/${userId}`).then(response => response.data)
        )

    },
    updateStatus: (status: string) => {
        return (
            instance.put<ResponseType>(`/profile/status`, { status: status })
        )
    },
    savePhoto: (photo: any) => {
        const formData = new FormData();
        formData.append('image', photo)
        return (
            instance.put<ResponseType<PhotosType>>(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    setProfile: (formData: ProfileType) => {
        return (
            instance.put<ResponseType>(`/profile`, formData)
        )
    }
};


