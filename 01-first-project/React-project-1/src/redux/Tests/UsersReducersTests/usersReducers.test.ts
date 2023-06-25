import usersReducer, { InitialStateType, actions } from "../../usersReducer";


let initialState:InitialStateType;

beforeEach(()=>{
    initialState = {
        users: [
            {id:0,name:'Anton1',followed:false,photos:{small:null,large:null},status:'status pedika 1'},
            {id:1,name:'Anton2',followed:false,photos:{small:null,large:null},status:'status pedika 2'},
            {id:2,name:'Anton3',followed:true,photos:{small:null,large:null},status:'status pedika 3'},
            {id:3,name:'Anton4',followed:true,photos:{small:null,large:null},status:'status pedika 4'}
        ] ,
        pageSize: 5 ,
        totalUsersCount: 0 ,
        currentPage: 1 ,
        isFetching: false ,
        followingProgress: [] 
    }
})

test("Follow success",()=>{
    const newState = usersReducer(initialState,actions.follow(1));
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("Unfollow success",()=>{
    const newState = usersReducer(initialState,actions.unfollow(3));
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})