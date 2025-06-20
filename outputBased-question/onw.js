 const arr=[1,2,3]
// arr[4]=5
// console.log(arr.length);
// console.log(arr[3]);

// const [a,b]=[10,"hi"]
// console.log(a,b);


function abc(name){
  // console.log("hi"); 
  this.name=name
}

const value=new abc("suraj")
console.log(value);

