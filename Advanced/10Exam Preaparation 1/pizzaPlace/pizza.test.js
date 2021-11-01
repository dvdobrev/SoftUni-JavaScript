const pizzUni = require('./pizza') 
const {assert} = require('chai');

describe("Pizza place", function() {
    describe("makeOrder test", () => {

        it ('Should return message if pizza is orderd', () => {
            let order = {
                orderedPizza: 'Margarita',
            }
            let result = pizzUni.makeAnOrder(order);
            let expected = `You just ordered ${order.orderedPizza}`

            assert.equal(result, expected)
        })
        it ('Should return message if pizza and drink are orderd', () => {
            let order = {
                orderedPizza: 'Margarita',
                orderedDrink: 'Coke',
            }
            let result = pizzUni.makeAnOrder(order);
            let expected = `You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`

            assert.equal(result, expected)
        })

        it ('Should throw error message', () => {
            let order = {}

            let result = () => pizzUni.makeAnOrder(order);
            let expected = `You must order at least 1 Pizza to finish the order.`

            assert.throw(result, expected)
        })
       
        
     });

     describe("getRemainingWork test", () => {

        it ('Return message - All orders are complete', () => {
            let pizzaStatus = [ 
                {
                pizzaName: 'Tuna',
                status: 'ready',
            }];

            let result = pizzUni.getRemainingWork(pizzaStatus);
            let expected = `All orders are complete!`

            assert.equal(result, expected)
        })


        it ('Return message with the remaining pizzas', () => {
            let pizzaStatus = [ 
                {
                pizzaName: 'Tuna',
                status: 'preparing',
            },
            {
                pizzaName: 'Anana',
                status: 'preparing',
            }];

            let result = pizzUni.getRemainingWork(pizzaStatus);
            let pizzaNames = pizzaStatus.map(p => p.pizzaName).join(', ')
            let expected = `The following pizzas are still preparin: ${pizzaNames}.`

            assert.equal(result, expected)
        })
        
    });

    describe("orderType", () => {

        it ('Should return total sum for Carry out order', () => {
            let result = pizzUni.orderType(10, "Carry Out"); // should return 9
            
            let expected = 9;

            assert.equal(result, expected)
        })

        it ('Should return total sum for Carry out order', () => {
            let result = pizzUni.orderType(10, "Carry Out"); // should return 9
            
            let expected = 9;

            assert.equal(result, expected)
        })

        it ('Should return total sum for Carry out order', () => {
            let result = pizzUni.orderType(10, "Delivery"); // should return 10
            
            let expected = 10;

            assert.equal(result, expected)
        })
        
    });
    
});
