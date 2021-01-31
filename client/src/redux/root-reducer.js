import { combineReducers } from 'redux';
import bookReducer from './books/bookReducer'
import cartReducer from './cart/cartReducer'


export default combineReducers({
    book: bookReducer,
    cart : cartReducer
}); 