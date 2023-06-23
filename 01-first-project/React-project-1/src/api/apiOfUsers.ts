import { AxiosPromise } from "axios";
import { GetItemsType, instance } from "./apiInstance.ts";
import { ResponseType } from "./apiOfHeader.js";





export  const usersAPI = {
    getUsers : (currentPage:number = 1, pageSize:number = 5) => {
        return (
            instance.get<GetItemsType>(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        )
    },
    unfollowUser: (userID:number)=> {
        return (
            instance.delete(`/follow/${userID}`).then(response => response.data) as Promise<ResponseType>
        )
    }, 
    followUser: (userID:number)=> {
        return(
            instance.post<ResponseType>(`/follow/${userID}`,{}).then(response=>response.data)
        )
    }
};









