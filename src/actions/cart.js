import cartConstants from "../constants/cart";

export const addCart = product => ({
    type: cartConstants.CART_ADD_ITEM,
    payload: product
})

export const removeCart = product => ({
    type: cartConstants.CART_REMOVE_ITEM,
    payload: product
})

export const deleteCart = product => ({
    type: cartConstants.CART_DELETE_ITEM,
    payload: product
})