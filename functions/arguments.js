


// the arguments object is an array-like object available within functions that holds all the arguments passed to the function. 
// It's not an actual array,
//  but it has a similar structure, 
// and you can access the values using indices (like an array).



// function calculation(a,b){
//   console.log(a+b);
//   console.log(arguments); 
  
// }
// calculation(2,3,45,4)


function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4));


