import {authActions} from './authenticationActionType'

const initialState = {
    loading: false,
    user: null,
    error: ''
  }


const authenticationReducer = (state = initialState,action) =>{
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
                user: action.payload,
                error:''
            }
        case authActions.LOGIN_USER_FAILURE:
            return{
                loading : false,
                ...state,
                user: null,
                error: action.payload
            }
        
        case authActions.LOGOUT_USER:
            return{
                ...initialState
            }  

        default:
            return{
                ...initialState
            }    
    }
}

export default authenticationReducer