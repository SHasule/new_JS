
 
//  let FullName={
//   fname:"om",
//   lname:"jadhav"
//  }
 
//  function fullname (){
//   return `${FullName.fname} ${FullName.lname}`
//  }
// console.log(fullname());



//use of getter setters
// getters -> access properties
 // setters -> change properties

 let person={
  fname:"suraj",
  lname:"jadhav",
  
   get fullname(){
    return `${this.fname} ${this.lname}`
  },

  set fullname(value){
 
    if(typeof value!==String){
 throw new Error(`pass string`)
    }
    let parts=value.split(" ");
    this.fname=parts[0];
    this.lname=parts[1];
  }
 
  
 }
// console.log(person.getname());

// console.log(person.fullname);

try{
    //  person.fullname=1

  person.fullname="mayank jadhav"
  console.log(person.fullname);
}

 catch(e){
   alert(e)
 }
 
//  console.log(person.fullname);






 