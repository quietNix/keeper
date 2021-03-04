import {
    USER_CREATED_STATUS,
    CHANGE_AUTH_STATUS,
    REQUEST_AUTH_PENDING,
    REQUEST_AUTH_SUCCESS,
    REQUEST_AUTH_FAILED
} from "./constants";

const initialState = {
    userCreated: false,
    isPending: true,    //if any problem turn it into true
    auth: false,
    error: ""
}

export const requestAuthReducer = (state = initialState, action={})=>{
    switch(action.type){
        case USER_CREATED_STATUS:
            return{...state, userCreated: action.payload}
        case CHANGE_AUTH_STATUS:
            return{...state, auth:action.payload}
        case REQUEST_AUTH_PENDING:
            return {...state, isPending: true}
        case REQUEST_AUTH_SUCCESS:
            return {...state, auth: action.payload, isPending: false}
        case REQUEST_AUTH_FAILED:
            return{...state, error: action.payload, isPending:false}
        default:
            return state;


    }
}