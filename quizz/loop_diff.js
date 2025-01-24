const person = {
   name: 'Alice', 
   age: 25, 
   city: 'New York'
  };

  for(let key in person){
    console.log(key);
    console.log(person[key]);
  }

  const myarr=[99,33,22,44]
  for(let key in myarr){
    console.log(key);
    console.log(myarr[key]);
    console.log(key[myarr]);   
  }

console.log("for of");

  // for of 
   const newArry=[76,98,32,32]
   for(let value of newArry){
    console.log(value);
    console.log(value);
    
   }