let a = {};

let b = {'a': 5};
let c = {'d': 6};

a.b = b;
a.c = c;

let searchedA = Object.keys(a).find(p => p == 'b')

console.log(Object.keys(a).length)