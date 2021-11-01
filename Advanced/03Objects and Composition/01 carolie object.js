function solve(arr) {
	let newArr = {}

	for (let i = 0; i < arr.length; i+=2) {
		newArr[arr[i]] = Number(arr[i + 1]);

	}

	console.log(newArr)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
console.log("----------")
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
console.log("----------")
