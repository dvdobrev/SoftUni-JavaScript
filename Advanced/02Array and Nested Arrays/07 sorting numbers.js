function solve(arr){
    arr.sort((a,b) => a - b)
    let sorted = [];

    while (arr.length > 0){
        sorted.push(arr.shift())
        if (arr.length !== 0){
            sorted.push(arr.pop())
        }
    }




   /* while (arr.length > 0){
        if (counter === 1){
            let smallest = Math.min(...arr)
            let smallestIndex = arr.indexOf(smallest)
            sorted.push(smallest)
            arr.splice(smallestIndex, 1)
            counter = 2
            

        } else {
            let largest = Math.max(...arr)
        let largestIndex = arr.indexOf(largest)
        sorted.push(largest)
        arr.splice(largestIndex, 1)
        counter = 1

        }   */

    return sorted

}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))