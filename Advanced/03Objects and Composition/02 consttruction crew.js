function solve(obj) {
	let waterNeeded = 0;

	if (obj.dizziness === true){
		waterNeeded += 0.1 * obj.weight * obj.experience;
		obj.levelOfHydrated += waterNeeded;
		obj.dizziness = false;
		return obj


	} else if (obj.dizziness === false){
		return obj
	}

}

console.log(solve({ weight: 80,
	experience: 1,
	levelOfHydrated: 0,
	dizziness: true }))
console.log("------------")
console.log(solve({ weight: 120,
	experience: 20,
	levelOfHydrated: 200,
	dizziness: true }))
console.log("------------")
console.log(solve({ weight: 95,
	experience: 3,
	levelOfHydrated: 0,
	dizziness: false }))
console.log("------------")