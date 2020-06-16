import wishConstants from "../constants/wishList";

export const addWishList = product => ({
    type: wishConstants.WISHLIST_ADD,
    payload: product
})

export const removeWishList = (product) => ({
    type: wishConstants.WISHLIST_REMOVE,
    payload: product
})