import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

it('Length posts should be incremented', () => {
    //test data
    let action = addPostActionCreator('Pososi');
    let initialState = {
        postsData: [
            { message: 'Hello it my first pussy', likeCount: 5 },
            { message: 'I liked your ass', likeCount: 112 }
        ]
    };
    //action
    let newState = profileReducer(initialState, action);
    //expectation
    expect(newState.postsData.length).toBe(3);
})

it('Message of new post shoul be Pososi', () => {
    //test data
    let action = addPostActionCreator('Pososi');
    let initialState = {
        postsData: [
            { message: 'Hello it my first pussy', likeCount: 5 },
            { message: 'I liked your ass', likeCount: 112 }
        ]
    };
    //action
    let newState = profileReducer(initialState, action);
    //expectation
    expect(newState.postsData[2].message).toBe('Pososi')
})

it('After deleting lenght of messages shoul be decremented', () => {
    //test data
    let action = deletePost(1);
    let initialState = {
        postsData: [
            { message: 'Hello it my first pussy', likeCount: 5, postId: 1 },
            { message: 'I liked your ass', likeCount: 112, postId: 2 },
            { message: 'I liked your ass', likeCount: 112, postId: 3 },
            { message: 'I liked your ass', likeCount: 112, postId: 4 }
        ]
    };
    //action
    let newState = profileReducer(initialState, action);
    //expectation
    expect(newState.postsData.length).toBe(3)
})

