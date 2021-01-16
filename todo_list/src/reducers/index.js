import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';
import taskReducer from'./taskReducer';

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    tasks:taskReducer

});