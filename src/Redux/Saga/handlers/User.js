import {call,put} from 'redux-saga/effects';
import { requestGetUser } from '../request/User';
import {setUser} from '../../Duck/User';


export function* handleRequest(){
    try{
        const response=yield call(requestGetUser);
        const {data}=response;
        yield put(setUser(data))
    }catch(error){
        console.log(error);
    }
}
