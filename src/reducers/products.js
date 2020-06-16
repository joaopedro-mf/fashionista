import productsConstants from "../constants/products";

const productsInitialState = {
    items: {}
}

const productsReducer = (state = productsInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case productsConstants.SET_PRODUCT:
            return {
                ...state,
                items: payload
            }
        default:
            return state;
    }
}

export default productsReducer