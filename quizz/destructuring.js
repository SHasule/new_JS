
const myarr=[1,2,3]

// const a=myarr[0]
// const b=myarr[1]
// console.log(a,b);

//desturcture
const [p,q,r]=myarr
console.log(r);



// object
console.log("object");

const person = { name: 'John', age: 30 };
// Instead of doing this:
// const name = person.name;
// const age = person.age;

// You can do this:
 const { name, age } = person;
console.log(name, age)

