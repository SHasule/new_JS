let firstarray=["suraj","kiran","ram"]

let secnodarray=["jhon","rock","yan"]

// push - array in array
// not change original array

// firstarray.push(secnodarray)
// console.log(firstarray);

//  concat return new array
 let concatarray= firstarray.concat(secnodarray)
 console.log(concatarray);


//   form
console.log(Array.from("suraj"));

console.log(Array.isArray(secnodarray));

let s1=[2,4,5,6,[7,7],[65,[54,53]]]

let flattedarray=s1.flat(Infinity)
console.log(flattedarray);


let reverse=[2,5,6,8,89]
let reverseArray=reverse.reverse()
console.log(reverseArray);


const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);





