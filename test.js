let a = [{'a': 5}, {'b': 6}]

console.log(a);
let c = {'a': 2}
a.push(c)
  
console.log(a);
a = new Set(a)
console.log(a);