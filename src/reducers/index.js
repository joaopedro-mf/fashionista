import { combineReducers } from "redux";

import cartReducer from './cart'
import wishListReducer from './wishList'
import productsReducer from './products'

const rootReducers = combineReducers({
    cart: cartReducer,
    wish: wishListReducer,
    products: productsReducer
})


export default rootReducers;