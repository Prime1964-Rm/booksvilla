import history from '../_helpers/history'
import {userService} from  '../_services/user.service'


export const userActions = {
    login,
    logout,
    getAll
}


async function login(username,password){
return dispatch =>{
    dispatch(request({username}))
    user= await userService.login(username,password)
    dispatch()
}
}


