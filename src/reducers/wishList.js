import wishConstants from "../constants/wishList";

const wishInitialState = {
    items: []
}

const wishListReducer = (state = wishInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case wishConstants.WISHLIST_ADD:
            return {
                ...state,
                items: [...state.items, payload]
            }
        case wishConstants.WISHLIST_REMOVE:
            var products = state.items.filter((product) => {
                return product.id !== payload
            })

            return {
                ...state,
                items: products
            }
        default:
            return state;
    }
}

export default wishListReducer