function cooking(num, o1, o2, o3, o4, o5){
    let number = Number(num);
    let list = [o1, o2, o3, o4, o5]
    
    for (let i = 0; i < list.length; i++) {
        let operator = list[i]

        if (operator === "chop"){
            number = number  / 2

        } else if (operator === "dice"){
            number = Math.sqrt(number)

        } else if (operator === "spice"){
            number = number + 1

        }else if (operator === "bake"){
            number = number * 3

        } else if (operator === "fillet"){
            number = number - (number * 0.2)
        }
        
        console.log(number)
    }

    //console.log("--------------")

}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')