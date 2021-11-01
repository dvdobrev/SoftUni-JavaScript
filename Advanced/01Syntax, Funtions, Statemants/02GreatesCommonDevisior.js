function number(n1, n2){
    while(n2 > 0){
        let temp = n2
        n2 = n1 % n2
        n1 = temp
    }
    console.log(n1)
}
number(15, 5)