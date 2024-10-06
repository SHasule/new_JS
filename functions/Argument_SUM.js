
// addition

function sum(a,b){
  return a+b
}
// console.log(sum(2,4));
// console.log(sum(4,5,2,2));



function argumentsum(){
 console.log(arguments);
 
 let total=0;
 for(let value of arguments)
   total=total+value
  return total
}
// console.log(argumentsum(2,4,5,6));

let add=argumentsum(4,5,6,6)
console.log(add);



