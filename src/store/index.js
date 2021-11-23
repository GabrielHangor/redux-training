import { createStore, combineReducers, applyMiddleware } from 'redux';
import { countReducer } from './countReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import userReducer from './userReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ countReducer, userReducer });
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
