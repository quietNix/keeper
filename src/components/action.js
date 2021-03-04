import axios from "axios";

import {
    serverURL,
    USER_CREATED_STATUS,
    CHANGE_AUTH_STATUS,
    REQUEST_AUTH_PENDING,
    REQUEST_AUTH_SUCCESS,
    REQUEST_AUTH_FAILED
} from "./constants";

export const setAuthorisationStatus=(verdict) =>{
    return({
        type: CHANGE_AUTH_STATUS,
        payload: verdict
        })
}

export const setUserCreated=(verdict)=>{
    return({
        type: USER_CREATED_STATUS,
        payload: verdict
    })
}

export const requestAuth=()=>(dispatch)=>{
    dispatch({type: REQUEST_AUTH_PENDING});
        axios.get(serverURL + "/isAuthenticated", { withCredentials: true })
            .then(response =>dispatch({type:REQUEST_AUTH_SUCCESS, payload: response.data.isAuth}))
            .catch(error => dispatch({type:REQUEST_AUTH_FAILED, payload: error}))
}

