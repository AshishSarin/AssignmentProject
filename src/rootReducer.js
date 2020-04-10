import { combineReducers } from 'redux';


const rootReducer = () => {
    // define all reducers here
    const PostReducer = require('./screens/PostScreen/reducers/PostReducer').default;
    return combineReducers({
        PostReducer
    });
};

export default rootReducer;

