
let a=[3,5,6];
let b=[11,12,44]

let combination=a.concat(b)
console.log(combination);

let total=combination.slice(2,4)
console.log("total",total);
// console.log(combination);


console.log("spread");

let first=[2,3,5,6];
let secnod=[3,54,6,78]
let third=[...first,...secnod]
console.log(third);

// copy
console.log("copy");

let another=[...third]
another.pop()
console.log(another);

