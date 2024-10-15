 

//  using new keyword we can create multiple instances 
// new keyword create every time new instace or copy
// "this" always point window object

 let user=function(name,age,city){
   this.username=name;
   this.userage=age;
   this.usercity=city;
   this.getfullinfo=function(){
    console.log(`${this.userage} and username is ${this.username}`);  
   }
 }


 user.prototype.firstname=function(){
  console.log(`username is : ${this.username}`);
 }

// new object created

 let firstuser= new user("suraj",20,'pune')           
 console.log(firstuser);
  firstuser.firstname()

 
 let secnoduser=new user("kiran",32,'latur')
 console.log(secnoduser);
//  secnoduser.getfullinfo()
 
 