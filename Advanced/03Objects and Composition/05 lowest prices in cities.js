function solve(input) {
	let products = {};

	for (let el of input) {

		let [town, productName, price] = el.split(" | ")
		price = Number(price);

		if (!products.hasOwnProperty(productName)) {
			products[productName] = {};

		}
		products[productName][town] = price;
	}
	let result = [];

	for (const key in products){
		let townSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
		let cheapestTown = townSorted[0];
		result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
	}

	return result.join("\n");

}