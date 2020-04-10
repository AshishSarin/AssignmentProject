import { takeLatest, put } from 'redux-saga/effects';
import {
    CALL_GET_POSTS,
    CALL_GET_POST_SUCCESS,
    CALL_GET_POST_FAILURE
} from '../actions/actionTypes';
import Api  from './Api';



function* fetchPosts() {
    console.log('fetPostsaga is called');
    try {
        let resp = yield Api.fetchPosts();
        console.log('resp-->', resp);
        yield put({ type: CALL_GET_POST_SUCCESS, data: [1, 3, 4, 5] })
    } catch (error) {
        // yield 
        console.log('error->', error);
    }
}

export default function* PostWatcher() {
    console.log('runngin post watcher')
    yield takeLatest(CALL_GET_POSTS, fetchPosts)
}