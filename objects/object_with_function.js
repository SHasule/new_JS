let user={
  name:"suraj hasule",
  email:"suraj@gmail.com",
  
  isloggedin:"false",
  age:22,
  "collage":"cocsit",
}

user.greeting=function(){
  console.log("user greeting");  
}

console.log(user.greeting());

user.greetingtwo=function(){
  console.log(`age is${this.age} and name ${this.name}`); 
}

console.log(user.greetingtwo());




