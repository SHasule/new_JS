
 let name=["vivek","hitesh","ram"]
 console.log(typeof name);

 name[0]="don"
//  console.log(name);
 
function check(){
  console.log("hello"); 
}
check()
console.log(typeof check);


let myobj={
  name:"suraj",
  age:12
}
// console.log(check);
console.log(myobj.age);
console.log(typeof myobj);


let myobj2=myobj
myobj2.name="ram"
console.log(myobj);
console.log(myobj2);


// +++++++++++ string+++=
console.log("string...");

const person="kiran"
console.log(person.length);

const person1=new String("suraj @@hasule ")
console.log(person1.charAt(2));

console.log(person1.toUpperCase());

console.log(person1.replace("@","-"));


console.log(person1.trim());
console.log(person1.includes("@"));

const name2="bajrag-more"
console.log(name2.split("-"));



// +++++number++++

console.log("number....");
const score=123;

const score2=new Number(44.933)
console.log(score);

console.log(score2);


console.log(score2.toFixed(2));
 console.log(score2.toPrecision(2));

const score3=9898992
console.log(score3.toLocaleString("en-IN"));


// math
console.log("math");
console.log(Math);


const id=Symbol('123')
console.log(id);





function myfun(){
  console.log("hello");
  
}
myfun()

let username="hitesh"
let user="somesh"
user=username
console.log(user);
console.log(username);

let obj={
  user:"tony",

}
let obj2=obj.user="khabib"
console.log(obj2);
console.log(obj);


let n1='kiran'
let n2=n1.slice(0,2)
console.log(n2);


console.log(Math.floor(Math.random()*10)+1);

let min=10
let max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);


