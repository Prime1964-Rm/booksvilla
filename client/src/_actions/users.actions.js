// import { connect, useDispatch } from 'react-redux'
// import { loginUserFailure, loginUserRequest, loginUserSuccess } from '../redux/Authentication/authenticationAction'
// import history from '../_helpers/history'
// import { userService } from '../_services/user.service'
// import store from '../redux/store'


// export const userActions = {
// 	login,
// 	logout,
// }



//  function login(email, password) {

// 	return async dispatch => {
// 		dispatch(loginUserRequest())
// 		try{
// 			let	user = await userService.login(email, password)
// 			if(user){
// 				store.dispatch(loginUserSuccess(user))
// 				history.push('/')
// 			}
// 		}
// 		catch(err){
// 			store.dispatch(loginUserFailure(err))
// 		}
// 	}
// }

// function logout(){
// 	userService.logout()
// 	store.dispatch(logout())
// }
