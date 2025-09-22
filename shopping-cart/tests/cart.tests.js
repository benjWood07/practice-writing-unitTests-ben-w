const { addItem, removeItem, getTotalItems } = require('../cartUtils');

describe('Cart Utils', () => {       //creates a test suite grouping all cart-related tests
    let cart;
    beforeEach(() => {               //runs before each test to reset the cart to an empty state
        cart = { items: [] };
    });

    describe('addItem', () => {                                              //creates a sub-group for addItem tests
        test('should add new item to empty cart', () => {
            const item = { id: 1, name: 'Red Hot Ripplets', price: 5.66 };   //creates an item object to test with
            const results = addItem(cart, item, 3);                          //calls our function and stores the returned new cart

            expect(results.items).toHaveLength(1);                           //verifies the returned cart has exactly one item
            expect(results.items[0]).toEqual({ id: 1, name: 'Red Hot Ripplets', price: 5.66, quantity: 3});   //verifies the returned cart has exactly one item
        });

        test('should increase quantity of existing item', () => {
            cart.items = [{ id: 1, name: 'Red Hot Ripplets', price: 5.66, quantity: 2 }];    //setting items property, array literal [] with 1 element
            const item = { id: 1, name: 'Red Hot Ripplets', price: 5.66 };
            const result = addItem(cart, item, 1);

            expect(result.item[0].quantity).toBe(3);
        });
    });

    describe('removeItem', () => {
        test('should remove item from cart', () => {
            cart.item = [
                { id: 1, name: 'Red Hot Ripplets', price: 5.66, quantity: 2 },
                { id: 2, name: 'Bubly Soda', price: 4.78, quantity: 1 }
            ];
            const result = removeItem(cart, { id: 1});

            expect(result.items).toHaveLength(1);
            espect(result.items[0].id).toBe(2);
        });
    });

    describe('getTotalItems', () => {
        test('should return total quantity of all items', () => {
            cart.items = [
                { id: 1, name: 'Apple', quantity: 3 },
                { id: 2, name: 'Banana', quantity: 2 }
            ];
      
            expect(getTotalItems(cart)).toBe(5);
        });
    });
});
