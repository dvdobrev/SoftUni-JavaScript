function solve(input) {
	let productCatalogue = {};
	for (let index = 0; index < input.length; index++) {
		let [productName, productPrice] = input[index].split(' : ');
		productPrice = Number(productPrice);
		let initial = productName[0].toUpperCase();

		if (productCatalogue[initial] === undefined){
			productCatalogue[initial] = {};
		}
			
		productCatalogue[initial][productName] = productPrice;
		}
		
		let result = [];
		let sorted = Object.keys(productCatalogue).sort((a,b) => a.localeCompare(b));
		for (const key of sorted) {
			let products = Object.entries(productCatalogue[key]).sort((a,b) => a[0].localeCompare(b[0]));
			result.push(key);
			let productsAsString = products.map(x => `  ${x[0]}: ${x[1]}`).join("\n");
			result.push(productsAsString);
		}

		return result.join("\n");
	}

	
	

console.log(solve(['Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10']
))
// console.log("----------")
// solve(['Banana : 2',
// 	'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
// 	'Rolex : 100000',
// 	'Rollon : 10',
// 	'Rali Car : 2000000',
// 	'Pesho : 0.000001',
// 	'Barrel : 10'])
