import { CALL_GET_POSTS, CALL_GET_POST_SUCCESS, CALL_GET_POST_FAILURE } from "../actions/actionTypes";


const initialState = {
    postList: [],
    isLoading: false,
    error: null,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALL_GET_POSTS:
            console.log(action.type);
            return {
                isLoading: true,
                error: null
            }
        case CALL_GET_POST_SUCCESS: 
        console.log(action.type);
            return {
                isLoading: false,
                postList: action.data,
            }
        case CALL_GET_POST_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default postReducer;
