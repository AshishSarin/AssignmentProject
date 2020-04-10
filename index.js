import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/rootReducer';
import rootSaga from './src/rootSaga';


const sagaMiddlware = createSagaMiddleware();
let middleware = compose(applyMiddleware(sagaMiddlware));
const store = createStore(rootReducer(),middleware);


class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
             </Provider>
        )
    }
}

sagaMiddlware.run(rootSaga);


AppRegistry.registerComponent(appName, () => Index);
