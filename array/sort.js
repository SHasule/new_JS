

let number=[32,43,54,11,21,1]
 let number_sort=number.sort()
console.log(number_sort);
console.log(typeof number_sort);

let num_reverse=number.reverse()
console.log(num_reverse);


//  filter

let array4=[-9,32,-32,3]
const neg_remover=array4.filter((num)=>{
  return num>=0;
})
console.log(neg_remover);


// map
console.log("mapping");

let newmap=[2,21,43,45]
let mapping=newmap.map((value)=>{
 return value+2
 
})
console.log(mapping);



// mapping on object
console.log("mapping on object");

let allnumbers=[77,22,32,90,-33,-3]
let bignum=allnumbers.filter((value)=>{
  return value>=30
})
console.log(bignum);

let mapobject=bignum.map((num)=>{
return {
  value:num/2
}
})
console.log(mapobject);


// chaining

let numbers=[12,22,32,32,44,21,32]
let numbers_chaining=numbers
.filter(value=>value>=20)
.map((num)=>{
  return {value:num*3}
})
console.log(numbers_chaining);

