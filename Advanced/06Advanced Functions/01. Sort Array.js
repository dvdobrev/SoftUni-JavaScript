function solve(numbers, state){
    return state === 'asc' ? numbers.sort((a,b) => a - b) :
    numbers.sort((a,b) => b - a);
    
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
