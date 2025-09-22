/*
Implement and test a basic shopping cart module. The module should include the
following methods:
1. addItem(cart, item, quantity): Adds an item to the cart.
2. removeItem(cart, item): Removes an item from the cart.
3. getTotalItems(cart): Returns the total number of items in the cart.
*/

function addItem(cart, item, quantity) {
    const existingItem = cart.item.find(cartItem => cartItem.id === item.id);     //searches through the cart's items array to see if this item already exists
    if (existingItem) {
        return {
            ...cart,                             //spread operator copies all properties from the original cart
            items: cart.item.map(cartItem =>
                cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + quantity}
                : cartItem
            )                                                     
        };
    }
    return {                                              //create a new cart object
        ...cart,
        items: [...cart.itmes, { ...item, quantity }]     //create new items array with all existing items plus the new item
    };
}

function removeItem(cart, item) {     //takes the cart and the item to remove
    return {
        ...cart,
        item: cart.item.filter(cartItem => cartItem.id != item.id)    //create new array excluding items that match the ID
    };
}

function getTotalItem(cart) {     //takes just the cart as parameter
    return cart.item.reduce((total, item) => total + item.quantity, 0);   //reduce() iterates through all items and accumulates a single value
}

module.exports = {
    addItem,
    removeItem,
    getTotalItem
};                                                                      
                                                                          