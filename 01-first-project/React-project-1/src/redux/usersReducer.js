const FOLLOW = 'FOLLOWT';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const FETCHING = 'FETCHING';
// const FATCHING_FALSE = 'FATCHING-FALSE'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case FETCHING:
            return { ...state, isFetching: action.isFetching }
    };
    return state;
};

export const follow = (userId) => {
    return { type: FOLLOW, userId }
};
export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
};
export const setUsers = (users) => {
    return { type: SET_USERS, users }
};
export const setPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
};
export const setTotalCount = (count) => {
    return { type: SET_TOTAL_USERS_COUNT, count }
};
export const setFetching = (isFetching) => {
    return {type:FETCHING, isFetching}
}

export default usersReducer;