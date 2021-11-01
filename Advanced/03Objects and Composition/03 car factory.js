function solve(obj) {
	let obj2 = {}


	let smallEngine = {power: 90, volume: 1800};
	let normalEngine = {power: 120, volume: 2400};
	let monsterEngine = {power: 200, volume: 3500};

	let hatchback = {type: 'hatchback', color: undefined};
	let coupe = {type: 'coupe', color: undefined}

	obj2.model = obj.model

	if (obj.power <= 90) {
		obj2.engine = smallEngine;
	} else if (obj.power <= 120) {
		obj2.engine = normalEngine;
	} else {
		obj2.engine = monsterEngine;
	}

	if (obj.carriage === 'hatchback') {
		let color = obj.color;
		obj2.carriage = hatchback;
		obj2.carriage.color = color;
	} else {
		let color = obj.color;
		obj2.carriage = coupe;
		obj2.carriage.color = color;

	}

	if (obj.wheelsize % 2 === 0) {
		obj.wheelsize -= 1;
	}
	obj2.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]

	return obj2

}

console.log(solve({
	model: 'VW Golf II',
	power: 90,
	color: 'blue',
	carriage: 'hatchback',
	wheelsize: 14
}))
console.log("------------")
console.log(solve({
	model: 'Opel Vectra',
	power: 110,
	color: 'grey',
	carriage: 'coupe',
	wheelsize: 17
}))
