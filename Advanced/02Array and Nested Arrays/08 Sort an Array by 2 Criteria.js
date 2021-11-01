function solve(arr){
    return arr.sort((a,b)  => {
        if (a.length === b.length){
            return a.localeCompare(b)
        }
        return a.length - b.length
    }).join('\n')  
    
}

/*solve(['alpha', 
'beta', 
'gamma'])

console.log("--------------")

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])

console.log("--------------")*/

console.log(solve(['test', 
'Deny', 
'omen', 
'Default']))

console.log("--------------")