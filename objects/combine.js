
let obj1={1:"a",2:"b"}
let obj2={3:"c",4:"d"}
let obj4={1:"e",2:"f"}

// using assign
let obj3=Object.assign({},obj1,obj2)
console.log(obj3);

// spread 
let obj5={...obj1,...obj2,...obj4}
console.log(obj5);



// 

let user={
  name:"suraj hasule",
  email:"suraj@gmail.com",
  isloggedin:"false",
}
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('name'));





