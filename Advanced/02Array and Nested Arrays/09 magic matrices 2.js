function solve(arr) {
    let rowSums = []
    let colSums = []

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        let sum = row.reduce((result, curr) => (result + curr), 0);
    }


    for (let i = 0; i < arr.length; i++) {
        let newRow = [];
        for (let y = 0; y < arr.length; y++) {
            newRow.push(arr[y][i]);
        }

        let sum = newRow.reduce((result, curr) => (result + curr), 0);
        colSums.push(sum);
    }

    return rowSums.concat(colSums).every((el, i, arr) => el === arr[0])
}


console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))
console.log('---------------')
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]))
console.log('---------------')
console.log(solve(
    [[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]
))
console.log('---------------')