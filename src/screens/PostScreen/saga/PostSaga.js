import { takeLatest, put, call, delay, select } from 'redux-saga/effects';
import {
    CALL_GET_POSTS,
    CALL_GET_POST_SUCCESS,
    CALL_GET_POST_FAILURE,
    START_POST_FETCHING,
    STOP_POST_FETCHING
} from '../actions/actionTypes';
import Api  from './Api';
import { POST_FETCH_INTERVAL } from '../../../utils/Constants';




function* fetchPosts() {
    try {
        const state = yield select((state) => state);
        let page = state.PostReducer.page + 1;
        let resp = yield Api.fetchPosts(page);
        console.log('resp-->', resp);
        yield put({ type: CALL_GET_POST_SUCCESS, data: resp })
    } catch (error) {
        yield put({ type: CALL_GET_POST_FAILURE, error: error.message });
        console.log('error->', error.message);
    }
}

function* startPostFetching(action) {
    if (action?.type === STOP_POST_FETCHING) {
        return;
    }
        yield call(fetchPosts);
        yield delay(POST_FETCH_INTERVAL);
        yield call(startPostFetching, {type: START_POST_FETCHING});
}



export default function* PostWatcher() {
    yield takeLatest([START_POST_FETCHING, STOP_POST_FETCHING], startPostFetching);
    yield takeLatest(CALL_GET_POSTS, fetchPosts)
}