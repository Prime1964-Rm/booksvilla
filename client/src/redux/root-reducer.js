import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import bookReducer from './books/bookReducer'
import cartReducer from './cart/cartReducer'
import authenticationReducer from './Authentication/authenticationReducer'


export default combineReducers({
    book: bookReducer,
    cart : cartReducer,
    login : authenticationReducer
}); 