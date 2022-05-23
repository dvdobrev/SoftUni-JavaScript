class VegetableStore {
    
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    // {type} {quantity} {price}

    loadingVegetables(arr) {
        let addedProducts = []
        
        for (let p of arr) {
            let currentProduct = {};

            let [type, quantity, price] = p.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            currentProduct = {
                type,
                quantity,
                price
            }        

            let searchedProduct = this.availableProducts.
            find(product => product.type == type);

            if (searchedProduct == undefined) {
                this.availableProducts.push(currentProduct);
                addedProducts.push(type);

            } else {
                searchedProduct.quantity += quantity;
                searchedProduct.price = price;
            }

        }

        let msg = ['Successfully added ']
        let productsString = addedProducts.join(', ');
     
        return (msg + productsString)

    }

    buyingVegetables (selectedProducts) {
        let totalPrice = 0.00;

        for (let product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);

            let searchedProduct = this.availableProducts.
            find(pr => pr.type == type);

            if (searchedProduct == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)

            } else if (searchedProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            
            } else {
                totalPrice += quantity * searchedProduct.price;
                searchedProduct.quantity -= quantity;
            }

        }
        
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }

    rottingVegetable (type, quantity) {
        quantity = Number(quantity);

        let searchedProduct = this.availableProducts.
        find(pr => pr.type == type);

        if (searchedProduct == undefined) {
            throw new Error(`${type} is not available in the store.`)

        } else if (searchedProduct.quantity < quantity) {
            searchedProduct.quantity = 0;

            return `The entire quantity of the ${type} has been removed.`

        } else {
            searchedProduct.quantity -= quantity;

            return `Some quantity of the ${type} has been removed.`
        }

    }

    revision () {
        let result = [`Available vegetables:`]

        this.availableProducts = this.availableProducts.sort((a, b) => a.price - b.price);


        for (let product of this.availableProducts) {
            result.push(`${product.type}-${product.quantity}-$${product.price}`)
        }

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return (result.join('\n'));
    }
}



// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.rottingVegetable("domati", 2.5));
//console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());



// ------------------------------------------

// let vegStore = new VegetableStore('Dobri', 'lulin');
// console.log(vegStore.loadingVegetables(['p1 2 3', 'p1 3 4', 'p2 4 5']))

// console.log(vegStore.buyingVegetables(["p1 1"]));
// console.log(vegStore.buyingVegetables(["p3 1"]));
// console.log(vegStore.buyingVegetables(["p1 10"]));
