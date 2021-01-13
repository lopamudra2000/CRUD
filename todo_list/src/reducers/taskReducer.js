import{CREATE_TASK,
    FETCH_TASKS,
    FETCH_TASK,
    DELETE_TASK,
    EDIT_TASK} from '../actions/types'
import _ from 'lodash';

export default (state={}, action)=>{
    switch(action.type){
        case FETCH_TASKS:
            return{...state, ..._.mapKeys(action.payload,'id')};
        case FETCH_TASK:
            return{...state,[action.payload.id]:action.payload};
        case CREATE_TASK:
            return{...state,[action.payload.id]:action.payload};
        case EDIT_TASK:
            return{...state,[action.payload.id]:action.payload};
        case DELETE_TASK:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}