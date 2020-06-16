import productsConstants from "../constants/products";

function setProducts(products) {
    return {
        type: productsConstants.SET_PRODUCT,
        payload: products
    };
}

export default setProducts