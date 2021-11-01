function rotate(array, number){
    let newArray = array;

    for (let i = 0; i < number; i++){
        let currentElement = newArray.pop();
        newArray.unshift(currentElement);
    }

    console.log(newArray.join(' '));

}

rotate(['1', 
'2', 
'3', 
'4'], 
2)


console.log("--------------")


rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)