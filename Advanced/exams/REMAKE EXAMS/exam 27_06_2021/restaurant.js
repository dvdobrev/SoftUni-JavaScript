class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {  //products is array from strings

        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            let searchedProduct = Object.keys(this.stockProducts).find(p => p == productName);

            if (this.budgetMoney >= productTotalPrice) {

                if (searchedProduct == undefined) {
                    this.stockProducts[productName] ={
                        productQuantity,
                        productTotalPrice}

                    this.budgetMoney -= productTotalPrice;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`)

                } else {
                    this.stockProducts[productName].productQuantity += productQuantity;
                    this.budgetMoney -= productTotalPrice;
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
                }

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        price = Number(price);

        let searchedMeal = Object.keys(this.menu).find(m => m == meal);

        let products = {};

        for (let product of neededProducts) {
            let [productName, productQuantity] = product.split(' ');
            productQuantity = Number(productQuantity);
            products[productName] = productQuantity;
        }

        if (searchedMeal == undefined) {
            this.menu[meal] = {
                price,
                products
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }

        if (Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }     
    }

    showTheMenu() {

        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`

        } else {
            let result = [];
            Object.keys(this.menu).forEach(m => result.push(`${m} - $ ${this.menu[m].price}`))

            return result.join('\n');
        }      
    }

    makeTheOrder(meal) {
        let searchedMeal = Object.keys(this.menu).find(m => m == meal);

        if (searchedMeal == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        
        } else {

            let currentMealProducts = Object.keys(this.menu[meal].products);

            for (let p of currentMealProducts) {
                if (!Object.keys(this.stockProducts).includes(p)) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            }

            for (let product of currentMealProducts){
                this.stockProducts[product].productQuantity -= this.menu[meal].products[product];
            }
               
            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }

    }

}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Yogurt 500 1500', 'Honey 5 50']));
// //kitchen.loadProducts(['Banana 10 5', 'Yogurt 5 15', 'Honey 5 50']);
// //console.log(kitchen.addToMenu('keks', ['Banana 2', "Honey 1", 'sol 2'], 3));
// console.log(kitchen.addToMenu('keks', ['Banana 2', "Honey 1"], 3));
// console.log(kitchen.showTheMenu());
// console.log('------------------');
// console.log(kitchen.makeTheOrder('milk'));
// console.log(kitchen.makeTheOrder('keks'));