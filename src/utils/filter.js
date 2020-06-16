export function filterBy(listProducts, name) {
    return listProducts.filter((data) => {
        return data.name.toLowerCase().includes(name.toLowerCase());
    })
}

export function filteraddItem(listProducts, product) {
    return listProducts.filter((data) => {
        if (product.name === data.name && product.sizeSelected === data.sizeSelected) {
            product.quantity = product.quantity++;
            return true
        }
    })
}
