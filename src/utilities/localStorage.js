function getLS() {
    const fromLS = localStorage.getItem('cart')
    if (fromLS) {
        return JSON.parse(fromLS)
    }
    return [];
}

function saveCartToLS(cart) {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
function addToLS(id) {
    const cart = getLS();
    cart.push(id)
    saveCartToLS(cart)
}
function removeFromLs(id) {
    const cart = getLS();
    const remaining = cart.filter(idx => idx !== id)
    saveCartToLS(remaining)
}
export { addToLS, getLS ,removeFromLs} 