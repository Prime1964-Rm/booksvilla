import {authActions} from './authenticationActionType'

export const loginUserRequest = () =>{
    return{
        type: authActions.LOGIN_USER_REQUEST
    }
}

export const loginUserSuccess = (users) =>{
    return{
        type: authActions.LOGIN_USER_SUCCESS,
        payload: users
    }
}


export const loginUserFailure = (error) =>{
    return{
        type: authActions.Login_USER_FAILURE,
        payload: error
    }
}