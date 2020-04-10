import { CALL_GET_POSTS, START_POST_FETCHING } from "./actionTypes"

export const callGetPosts = () => {
    console.log('dispatching call GetPost')
    return {
        type: CALL_GET_POSTS
    }
};

export const startPostFetching = () => {
    return {
        type: START_POST_FETCHING
    }
}