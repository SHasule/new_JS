

let addition_of_array=[1,3,4,6,2,1]

// let total=0;
// for(let value of addition_of_array)
// {
//   total=value+total 
// }
// console.log(total);


// using reducer 

 let sum=addition_of_array.reduce((acc,currentValue)=>{
 return acc=acc+currentValue
 },0)

 console.log(sum);
 
