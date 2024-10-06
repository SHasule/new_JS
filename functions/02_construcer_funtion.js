

function addition(num1,num2){
  this.num1=num1,
  this.num2=num2,

  this.show=function(){
    console.log("addition show");
    
  }
}

let obj=addition.name="hey"

console.log(obj);
delete obj.name
console.log(obj);


// let addition2=new addition(3,4)

// console.log(addition2.show());
// let add3=new addition(3,8)
// console.log(add3);


