import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import CartReducer from './UserReducer';

export default combineReducers({
    user: UserReducer,
    cart: CartReducer
});