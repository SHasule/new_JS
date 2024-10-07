
let mysymbol="key1"
let user={
  name:"suraj hasule",
  email:"suraj@gmail.com",
  [mysymbol]:"mykey1",
  isloggedin:"false",
  age:22,
  "collage":"cocsit",

}
console.log(user);
console.log(user.age);
console.log(user["email"]);

user.age=10;
console.log(user.age);
console.log(user["collage"]);
console.log( user[mysymbol]);













