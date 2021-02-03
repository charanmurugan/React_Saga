import { applyMiddleware, combineReducers, createStore } from "redux";
import CountReducer from './Duck/Counter'
import createSagaMiddleware from 'redux-saga'
import { watchSaga } from "./Saga/rootSaga";
import user from './Duck/User'


const reducer =combineReducers({
    count:CountReducer,
    user
});
const sagaMiddleware=createSagaMiddleware();
const middleware=[sagaMiddleware];

const store=createStore(reducer,{},applyMiddleware(...middleware));
sagaMiddleware.run(watchSaga);

export default store;
