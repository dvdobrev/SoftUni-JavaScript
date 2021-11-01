function extract(arr){
    let filteredArr = []
    let biggestNum = -999999999999999999999999999999

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            biggestNum = arr[i];
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr

}

extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])


console.log("--------------")

extract([1, 
    2, 
    3,
    4])


console.log("--------------")

extract([20, 
    3, 
    2, 
    15,
    6, 
    1])

