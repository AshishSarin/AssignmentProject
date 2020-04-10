import { connect } from "react-redux";
import PostScreen from "../components/main";
import { callGetPosts, startPostFetching } from "../actions";

const mapStateToProps = state => {
    return {
        postList: state.PostReducer.postList,
        isLoading: state.PostReducer.isLoading,
        error: state.PostReducer.error
    }
};


const mapDispatchToProps = dispatch => {
    return {
        callGetPost: () => {
            dispatch(callGetPosts());
        },
        startPostFetching: () => {
            dispatch(startPostFetching());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);


