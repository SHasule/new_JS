

// const jsuser=new Object()


const jsuser={}

jsuser.email="xyz@gmail.com";
jsuser.id="123abc";
jsuser.loggedin="true";

// console.log(jsuser);


// object nesting
const regularuser={
  email:"user@gmail.com",
   userdetails:{
         fullname:{
          name:"suraj",
          lname:"hasule"
         }
  }
}
console.log(regularuser);
console.log(regularuser.userdetails.fullname.name);


