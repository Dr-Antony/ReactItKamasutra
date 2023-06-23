import { instance, ResultCodeEnum } from "./apiInstance.ts";

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}

type AuthMeDataType = {
    id: number, email: string, login: string
}

export const headerAPI = {
    getMyData: () => {
        return (
            instance.get<ResponseType<AuthMeDataType>>(`/auth/me`).then(response => response.data)
        )
    }
};


