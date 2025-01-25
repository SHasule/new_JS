// var x=1
// x=12;
//  function foo(){
//   console.log(x);
//   var x=14;
//  }
//  foo()

// let time= setTimeout(()=>{
// console.log("timeout");
// },0)
// Promise.resolve().then(()=>console.log("heelo")).then(()=>console.log("india"))


// async function foo(){
//   return  'hello world'
// }
// const result=foo()
//  console.log((result));
//  foo().then((res)=>console.log((res))
//  )

//  console.log([1,2]==[1,2]);

// const str="hi i am suraj"
// const array=str.split(" ")
// console.log(array);

const str = "hi i am suraj";

// Capitalize each word's first letter
// const capitalizedStr = str.split(" ").map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(" ");

// console.log(capitalizedStr); // Output: "Hi I Am Suraj"

const capital=str.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
console.log(capital);

 