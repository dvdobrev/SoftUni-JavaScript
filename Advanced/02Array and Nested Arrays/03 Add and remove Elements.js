function solve(array) {
    let number = 1;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === "add"){
            newArray.push(number);
           
        } else if (command === "remove"){
            newArray.pop()

        }

        number += 1;
    }

    if (newArray.length === 0){
        
        console.log("Empty")
    } else {
        for (el of newArray){
            console.log(el)
        }
    }

}


/*solve(['add', 
'add', 
'add', 
'add'])

console.log("--------------")*/

solve(['add', 
'add', 
'remove', 
'add', 
'add'])



console.log("--------------")


solve(['remove', 
'remove', 
'remove'])