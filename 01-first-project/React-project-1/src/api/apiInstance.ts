import axios from "axios";

export enum ResultCodeEnum {
    Succes = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: { "API-KEY": "d58c2d5f-0707-4689-9a81-2885da2de5f9" }
});



export type GetItemsType={
    items:Array<UserType>,
    totalCount:number,
    error:string|null
}