

const user={
  name:"suraj",
  age:21,

   childObj:{
     newName:"cocsit",
     getAllDetail(){
       console.log(`${this.newName} and ${this.name}`); 
     }

   }
}
 user.childObj.getAllDetail()
// user.name="kiran";
// user.UserOtherInfo()

console.log(this);

function code(){
  console.log(this); 
}

// code()

const ArrowCode=()=>{
  console.log("arrow function");
  console.log(this); 
}
// ArrowCode()



const user1={
  firstname:"latur",
  getname(){
    const firstname="pune"
    return this.firstname
  }
}
// console.log(user1.getname());
console.log("/////////");

function someoone(){
  name="kk"
  console.log(`${name}`);
  
}
someoone()
