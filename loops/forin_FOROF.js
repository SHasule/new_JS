 
 
 // for of loop used on array
//  for in used on object
 
 
 let cities=["pune","mumbai","hydra","pimpri"]
//  for(let i=0;i<=cities.length;i++){
//   console.log(cities[i]);
//  }


for(let city of cities)
{
  console.log(city); 
}
console.log("++++++");

//  for(let city in cities)
//  {
//   console.log(city);
  
//  }
 
let person={
  name:"suraj",
  id:23,
  study:"js"
}

// for(let key in person)
// {
//   console.log(key ,person[key]); 
// }

const personkeys=Object.keys(person)
// console.log(personkey);

for (let personkey of personkeys)
  console.log(personkey);


let fullname="jhondoe"
  for(let i of fullname){
    console.log(i);
    
  }
