import {takeLatest} from 'redux-saga/effects';
import { GET_USER } from '../Duck/User';
import { handleRequest } from './handlers/User';


export function* watchSaga(){
    yield takeLatest(GET_USER,handleRequest);
};