function solve(arr){
    let sorted = arr.sort((a, b) => a.localeCompare(b))
    let counter = 1

    for (let i = 1; i < sorted.length + 1; i++) {
        console.log(`${i}.${sorted[i-1]}`)
        counter += 1
    }

}

solve(["John", "Bob", "Christina", "Ema"])