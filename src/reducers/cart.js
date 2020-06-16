import cartConstants from "../constants/cart";

import { filteraddItem } from '../utils/filter'

const cartInitialState = {
    items: [],
    quantity: 0,
    subTotal: 0
}

const cartReducer = (state = cartInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case cartConstants.CART_ADD_ITEM:
            console.log(state.quantity++)
            console.log(state.items)
            return {
                ...state,
                items: [...state.items, payload],
                quantity: state.quantity++,
                subTotal: state.subTotal + payload.actual_price
            }
        case cartConstants.CART_REMOVE_ITEM:
            return {
                ...state,
            }
        case cartConstants.CART_DELETE_ITEM:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default cartReducer