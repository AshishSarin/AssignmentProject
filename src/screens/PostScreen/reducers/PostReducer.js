import { CALL_GET_POSTS, CALL_GET_POST_SUCCESS, CALL_GET_POST_FAILURE } from "../actions/actionTypes";


const initialState = {
    postList: [],
    isLoading: false,
    error: null,
    page: 0,

}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALL_GET_POSTS:
            console.log(action.type);
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case CALL_GET_POST_SUCCESS: 
        console.log(action.data.page);
            return {
                ...state,
                isLoading: false,
                page: action.data?.page || 0,
                postList: [...state.postList, ...action.data?.hits]
            }
        case CALL_GET_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default postReducer;
