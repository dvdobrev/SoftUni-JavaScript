function solve(...arg){
    
    let types = {};
    let sorted = [];

    arg.forEach(el => {
        let currentType = typeof el
        types[currentType] = types[currentType] ? types[currentType] += 1 : 1

        console.log(`${currentType}: ${el}`);
    });
    
    // for (let el of arg) {
    //     let currentType = typeof el;
    //     if (currentType in types) {
    //         types[currentType]++;

    //     }else {
    //         types[currentType] = 1;
    //     }

    //     console.log(`${currentType}: ${el}`);
        
    // }

    for (let el in types) {
        sorted.push([el, types[el]]);
    }

    sorted.sort((a,b) => b[1] - a[1]);

    for (let el of sorted) {
        console.log(`${el[0]} = ${el[1]}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); })
