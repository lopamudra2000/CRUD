import tasks from '../apis/tasks';
import {CREATE_TASK,
    FETCH_TASKS,
    FETCH_TASK,
    DELETE_TASK,
    EDIT_TASK} from './types';

import {SIGN_IN, SIGN_OUT} from './types';
import history from '../history';

export const signIn =userId =>{
    return{
        type:SIGN_IN,
        payload:userId
    };
};
export const signOut =() =>{
    return{
        type:SIGN_OUT
    };
};
export const createTask=(formValues)=>async (dispatch,getState)=>{
    const { userId } = getState().auth;
    const response=await tasks.post('/Tasks', {...formValues, userId});
    dispatch({type:CREATE_TASK,payload:response.data});
    history.push('/')
    };

export const fetchTasks=()=> async dispatch=>{
    const response=await tasks.get('/Tasks');

    dispatch({type:FETCH_TASKS, payload:response.data});
};

export const fetchTask=(id)=> async dispatch=>{
    const response=await tasks.get(`/Tasks/${id}`);

    dispatch({type:FETCH_TASK, payload:response.data});
};

export const editTask=(id, formValues)=> async dispatch=>{
    const response=await tasks.patch(`/Tasks/${id}`, formValues);

    dispatch({type:EDIT_TASK, payload:response.data});
    history.push('/');
};

export const deleteTask=(id)=> async dispatch=>{
    await tasks.put(`/Tasks/${id}`);

    dispatch({type:DELETE_TASK, payload:id});
};