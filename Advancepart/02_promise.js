
const promiseOne=new Promise(function(resolve,reject){

  // DB calls
  // async task cryptographhy, network

  setTimeout(()=>{
    console.log("Async task 1 complated");
    resolve()
  },1000)
})
 
promiseOne.then(()=>{
  console.log("promise 1");
})

new Promise(function(reslove,reject){
  setTimeout(() => {
    console.log('Async 2 done');
    reslove()
  }, 2000);
}).then(()=>{
  console.log(`promise 2 done`);
})


const promisethree= new Promise(function(reslove,rejcet){
  setTimeout(() => {
  reslove({user:"suraj",id:3,clg:"COCSIT"})
  }, 1000);
})

promisethree.then((user)=>{
console.log(user);
})



let promsieFour=new Promise(function(reslove,reject){
 
  setTimeout(() => {
    let error=false
    if(!error){
      reslove({username:"hitesh",id:4,campus:"IIT"})
    }
    else{
      reject(`ERROR:omething wrong`)
    }
  }, 3000);
})

promsieFour.then((user)=>{
 return user.username
})
.then((username)=>{
  console.log(username);
}).catch((error)=>{
  console.log(error);
})


let promsieFive=new Promise(function(reslove,reject){
  setTimeout(() => {
    let error=true
    if(!error){
      reslove({username:"hitesh",id:4,campus:"IIT"})
    }
    else{
      reject(`JS:something wrong`)
    }
  }, 3000);
})

async function consumeFunctionFive (){
  
   try{
    let response=await promsieFive
   console.log(response);
   } catch(e){
      console.log("handle js error, ", e );
      
   }
 } 
consumeFunctionFive()
 