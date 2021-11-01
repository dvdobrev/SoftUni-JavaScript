function fibonacci(){
    let previousnumber =1;
    let currentnumber = 0;

    

    function inner(){
        let next = previousnumber + currentnumber;
        previousnumber = currentnumber;
        currentnumber = next;
        return currentnumber;
    }
    return inner;
    
}
let fib = fibonacci()
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
