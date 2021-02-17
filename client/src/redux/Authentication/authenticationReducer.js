import {authActions} from './authenticationActionType'

const initialState = {
    loading: false,
    user: null,
    error: ''
  }


export const authenticationReducer = (state = initialState,action) =>{
    console.log(action.type)
    switch(action.type){
        case authActions.LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case authActions.LOGIN_USER_SUCCESS:
            return{
                loading:false,
                ...state,
                users: action.payload,
                error:''
            }
        case authActions.Login_USER_FAILURE:
            return{
                loading : false,
                ...state,
                users: null,
                error: action.payload
            }
        

    }
}