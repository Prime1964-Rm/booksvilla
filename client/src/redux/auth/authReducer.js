import {SET_AUTH_TOKEN} from './authActionType'


const INITIAL_STATE={
    authToken: null
}


const authReducer= (state= INITIAL_STATE, action) =>{
    switch(action.type){
        case SET_AUTH_TOKEN:
            return{
                ...state,
                authToken: action.payload
            }
        default:
            return state;
    }
}

export default authReducer