
//  const firstArray=[1,2,3]
//  console.log(firstArray);

//  const SpreadFirstArray=[...firstArray]

//  console.log(SpreadFirstArray);

const firstArray=[1,2,3]
const secArray=[5,6,7]

const AddtwoArray=[...firstArray,...secArray]
console.log(AddtwoArray);

const obj1={
  name:"suraj",
  sirname:"hasule",
  fav:"ben10"
}
const obj2={
  name:"kiran",
  sirname:"yadav",
  city:"latur"
}
const obj3={...obj1,...obj2}
console.log("object added: ", obj3);


console.log("rest operator.......");

 function RestFunction(first,sec,...remaining){
  console.log(  first+sec);
  console.log(remaining);  

 }
 RestFunction(2,3,4,5,6,7,8)

 

 
 