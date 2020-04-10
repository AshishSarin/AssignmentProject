import { CALL_GET_POSTS } from "./actionTypes"

export const callGetPosts = () => {
    console.log('dispatching call GetPost')
    return {
        type: CALL_GET_POSTS
    }
}