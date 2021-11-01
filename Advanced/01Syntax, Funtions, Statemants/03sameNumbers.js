function sameNumbers(input){
    let inputAsString = input.toString();
    let totalSum = 0;
    let allTrue = true;

    for (let i = 0; i < inputAsString.length; i++){
        let num = Number(inputAsString[i]);
        totalSum += num
    }

    for (let i=1; i<inputAsString.length; i++){
        let nextNum = Number(inputAsString[i]);
        let previousNum = Number(inputAsString[i-1])
        if (previousNum === nextNum){
            continue;
        } else {
            allTrue = false;
            break;
        }

    }
    if (allTrue){
        console.log(true)
    } else {
        console.log(false)
    }

    console.log(totalSum)

}

sameNumbers(2222222)
sameNumbers(1234)