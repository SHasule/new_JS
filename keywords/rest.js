
// Rest collects elements into a new array or object.
// Spread expands elements from an array or object into individual elements.
function number(a,b,...c){
 console.log(c);
 
  return a+b
}
  console.log(number(3,4,5,6,7,8));


  console.log("object");
  

  // object
  const user1={
    name:"jhon",
    age:23,
    city:"pune"
  }
  
  const{name,...remaining}=user1;
  console.log(name);
  console.log(remaining);
  

  