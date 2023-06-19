import React from "react";
import UserItem from "./UserItem/UserItem";
import style from './Users.module.css';
import { useState } from "react";
import classNames from "classnames";
import { PhotosType } from "../../../../../Types/Types";





type UsersType = {
    followed:boolean,
    id:number,
    name:string,
    photos:PhotosType
    status:null | string,
    uniqueUrlName:any
}


type StateType={
    currentPage:number,
    followingProgress:Array<number>,
    isFetching:boolean,
    pageSize:number,
    totalUsersCount:number,
    users:Array<UsersType>
}


type PropsType = {
    currentPage:number,
    follow:any,
    followUsr:any,
    followingProgress:Array<number>,
    pageChange:any,
    pageSize:number,
    setFollowingProgress:()=>{},
    setPage:()=>{},
    setUsers:()=>{},
    state:StateType,
    totalUsersCount:number,
    unfollowUsr:any
}




let Users:React.FC<PropsType> = (props) => {
    debugger
    let allUsers = () => {
        return (
            props.state.users.map((user:UsersType) => {
                return (<UserItem id={user.id} followed={user.followed} key={user.id} photo={user.photos} name={user.name} followingProgress={props.followingProgress} functions={props} />)
            })
        )
    };
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let [pages,setPages] = useState([1,2,3,4,5])
    
    let nextPages = ()=>{
        let nextPages:Array<number> = []
        let right = pages[pages.length-1]
        for (let i:number = right; i <= pagesCount && i < right + 5 ; i++) {
            nextPages.push(i)
        }
        console.log(nextPages)
        setPages([...nextPages])
    }
    let beforePages =  ()=> {
        let nextPages:Array<number> = []
        let left = pages[0]
        if (left<=5) {
            left = 6
        }
        for (let i = left - 5; i <= pagesCount && i < left ; i++) {
            nextPages.push(i)
        }
        console.log(nextPages)
        setPages([...nextPages])
    }
    return (
        <div className={style.users__wrapper}>
            <div className={style.users__container}>
            <div className={style.users__button_paginator}>
            <button onClick={beforePages}>Назад</button>
            </div>
                {pages.map((p) => {
                    const unselectedSelected = classNames(style.unselected_page,{[style.selected_page]:props.currentPage === p})// Это пример как работать с клааснеймами через одноименную библиотеку. Очень удобно.!!! не очень то удобно в данном случае, так как переменная создаётся на каждую итерацию, что не делает приложение производительным.
                    return (<button className={unselectedSelected} onClick={(e) => { props.pageChange(p) }}>{p}</button>)
                })}
                <div className={style.users__button_paginator}>
                    <button onClick={nextPages}>Вперёд</button>
                </div>
            </div>
            {allUsers()}
        </div>
    )
}


export default Users;



// props.currentPage === p ? style.selected_page : style.unselected_page // //(классический пример) Это пример как работать с клааснеймами через одноименную библиотеку. Очень удобно.




// return (<button className={this.props.currentPage === { p } ? style.selected_page : style.unselected_page} onClick={(e) => { this.pageChange(p) }}>{p}</button>)












// import React from "react";
// import UserItem from "./UserItem/UserItem";
// import style from './Users.module.css';

// let Users = (props) => {
//     let allUsers = () => {
//         return (
            
//             props.state.users.map((user) => {
//                 return (<UserItem id={user.id} followed={user.followed} key={user.id} photo={user.photos} name={user.name} followingProgress={props.followingProgress} functions={props} />)
//             })
//         )
//     };
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
//     let pages = [];
//     for (let i = 1; i <= pagesCount && i < 10; i++) {
//         pages.push(i);
//     }
//     let nextPages = ()=>{
//         let nextPages = []
//         for (let i = pages.length; i <= pagesCount && i < pages.length + 10 ; i++) {
//             nextPages.push(i)
//         }
//         pages = nextPages;
//     }
//     return (
//         <div className={style.users__wrapper}>
//             <div className={style.users__container}>
//                 {pages.map((p) => {
//                     return (<button className={props.currentPage === p ? style.selected_page : style.unselected_page} onClick={(e) => { props.pageChange(p) }}>{p}</button>)
//                 })}
//                 <div className={style.users__button_paginator}>
//                     <button onClick={nextPages}>next</button>
//                 </div>
//             </div>
//             {allUsers()}
//         </div>
//     )
// }


// export default Users;



