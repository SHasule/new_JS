let newarray=[2,2,5,7,8,89];
console.log(newarray);

newarray.splice(3,0,4,5,0)
newarray.push(1)
console.log(newarray);

console.log("searching");

let searchingarray=[89,67,32,85,54]
console.log(searchingarray.indexOf(89));

console.log(searchingarray.includes(1));


console.log("removing");

let removeelemnt=[32,43,54,65]
console.log(removeelemnt);

// removeelemnt.pop()
// console.log(removeelemnt);
// removeelemnt.shift()
// console.log(removeelemnt);


removeelemnt.splice(2,2)
console.log("spliced",removeelemnt);

console.log("delete whole array");
let deletewhole_array=[2,32,545,5556,76,87]
console.log(deletewhole_array);

//whole array deleted
deletewhole_array.splice(0,deletewhole_array.length)
console.log(deletewhole_array);

// secnod method
let sec_delete_method=[544,54,6,7,88]
let  sec_method=sec_delete_method;

console.log("secnod method");

 sec_delete_method.length=0;
 console.log(sec_delete_method);
 










