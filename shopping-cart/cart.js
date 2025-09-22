/*
Implement and test a basic shopping cart module. The module should include the
following methods:
1. addItem(cart, item, quantity): Adds an item to the cart.
2. removeItem(cart, item): Removes an item from the cart.
3. getTotalItems(cart): Returns the total number of items in the cart.
*/

function addItem(cart, item, quantity) {
    const existingItem = cart.item.find(cartItem => cartItem.id === item.id);     //searches through the cart's items array to see if this item already exists
    if (existingItem) {                          //checks if we found an existing item (truthy value)
        return {                                 //start returning a new cart object
            ...cart,                             //spread operator copies all properties from the original cart
            items: cart.item.map(cartItem =>     //replace the items array with a new mapped array
                cartItem.id === item.id          //check if this is the item we're updating 
                ? { ...cartItem, quantity: cartItem.quantity + quantity}        //if yes, create new item object with updated quantity
                : cartItem                       //if no, keep the original item unchanged
            )                                    //this creates a completely new cart object without modifying the original                                                            
        };
    }
    return {                                              //create a new cart object
        ...cart,                                          //copy all original cart properties
        items: [...cart.itmes, { ...item, quantity }]     //create new items array with all existing items plus the new item
    };
}

function removeItem(cart, item) {     //takes the cart and the item to remove
    return {                          //return a new cart object
        ...cart,                      //copy all original cart properties
        item: cart.item.filter(cartItem => cartItem.id != item.id)    //create new array excluding items that match the ID
    };
}

function getTotalItem(cart) {     //takes just the cart as parameter
    return cart.item.reduce((total, item) => total + item.quantity, 0);   //reduce() iterates through all items and accumulates a single value
}                                                                         //(total, item) => - for each item, take the running total and current item
                                                                          //total + item.quantity - add this item's quantity to the running total
module.exports = {                                                        //, 0 - start the total at 0
    addItem,
    removeItem,
    getTotalItem
};                                                                      
                                                                          