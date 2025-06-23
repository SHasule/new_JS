let date=new Date()
console.log(date.toISOString());

let mydate=new Date(2023,1,23,9,1)
console.log(mydate.toString());

let timeStamp=Date.now()
console.log(timeStamp);
console.log(mydate.getTime());

let newDate=new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());


const arr=[2,3,4,6,7]
arr.push(99)
arr.shift()
arr.unshift(1)
arr.pop()
console.log(arr);

const newArry=arr.join()
console.log(newArry);


const A=[2,3,4,6,1]
 
const sliced=A.slice(1,3)
console.log(sliced,' sliced array');
console.log(A,"original");

const spliced=A.splice(1,4)
console.log(`${spliced} spliced arry`);
console.log(A ,' orginal');



const superhero=['sodi','sakha','jetha']
const superDon=['daya','tapu']

// const tkomc=superhero.concat(superDon)
const tkomc=[...superDon,...superhero]
console.log(tkomc);
console.log(Array.isArray(superDon));



const arryInArry=[12,33,44,[22,32,3,[323,422]]]
const newA=arryInArry.flat(Infinity)
console.log(newA);


const s1=12
const s2=44
const s3=45
console.log(Array.of(s1,s2,s3));




console.log("object");
const mySym=Symbol("key1")

let obj={

   [mySym]:"key2",
   name:"suraj"
   
}
console.log(typeof obj[mySym]);

console.log(obj);

obj.greet=function(){
  console.log("hello", this.name);
  
}
// console.log(obj.greet());
obj.greet()


const obj1={1:"a",2:"b"}
const obj2={1:"c",3:"b"}
const obj3={...obj1,...obj2}
console.log(obj3);

const user=[
  {
    email:"xyz@gmail.com",
  },
  info={
    userName:"tony",
    study:"hindi"

  }
]
// console.log(user[1].userName);

console.log(user);

let obj5={
  userName:"xyz",
  study:"java"
}
const {study:s}=obj5
console.log(s);



function calculation(n1,n2){
    let result=n1+n2
      return result 
}
let result=calculation(2,3)
console.log(result);



function printName(user="jhon"){
  if(!user){
   return ` enter user name`
    

  }
  return `${user} here`
}
const print=printName()
console.log(print);



const obj6={
  UserName:"stark",
  price:332
}

function handleObject(anyobject){
  return (`${anyobject.UserName} and price is ${anyobject.price} `);
   
}
console.log(handleObject(obj6));
