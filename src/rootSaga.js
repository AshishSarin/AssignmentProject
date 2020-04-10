import { call, all } from 'redux-saga/effects';

export default function* rootSaga() {
    // declare all sagas here
    const PostWatcher = require('./screens/PostScreen/saga/PostSaga').default;
    return yield all([
       call(PostWatcher)
    ]);
}