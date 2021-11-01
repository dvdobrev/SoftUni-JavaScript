function solve(arr){
    let ismagic = true;
    let rowSum = arr[0].reduce((a,b) => a + b, 0);

    for (let index = 0; index < arr.length; index++) {
        let currentRowSum =  arr[index].reduce((a,b) => a + b, 0);
        let currentColSum =  0;

        for (let col = 0; col < arr[index].length; col++) {
            currentColSum += arr[col][index];
        }

        if (currentRowSum === rowSum && currentColSum === rowSum){
            continue;
            
        } else {
            ismagic = false;
            break;
        }
    }
    console.log(`${ismagic}`); 
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
console.log('---------------')
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
console.log('---------------')
solve(    
    [[1, 0, 0],
     [0, 0, 1],
     [0, 1, 0]]
    )
console.log('---------------')