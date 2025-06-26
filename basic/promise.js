


let promiseOne=new Promise(function(reslove,rejected){

  // do DB calls
  setTimeout(()=>{
    console.log("Async task completed");
    reslove()
  },1000)
})

promiseOne.then(()=>{
  console.log("promise consumed");
})


new Promise(function(reslove,reject){
  setTimeout(()=>{
        reslove()
    console.log("asyn task 2 complated"); 
  },1000)
}).then(()=>{
  console.log("promise 2 consumed");
})

let promiseThree=new Promise(function(reslove,rejecct){
  setTimeout(() => {
     console.log("asyn task 3 complated");
     reslove({userName:"tony",subject:"MMA"}) 
  }, 1000);
})
promiseThree.then((user)=>{
 console.log(user);
 
})


let promiseFour=new Promise(function(reslove,rejected){

  let error=true
   if(error){
      reslove({user:"sam",subject:"MMA"})
   }
   else{
    rejected("ERROR: Somthing went wrong")
   }
})
promiseFour.then((user)=>{
  console.log(user);
  
}).catch((error)=>{
  console.log(error);
  
})



let promiseFive=new Promise(function(reslove,rejected){

  setTimeout(() => {
    let error=true
   if(error){
      reslove({user:"JS",subject:"MMA"})
   }
   else{
    rejected("ERROR: js went wrong")
   }
  }, 1000);
})

//promiseFive.then((user)=>{
//  console.log(user);
 
// }).catch((error)=>{
//   console.log(error);
  
// })

async function handleFive() {
  try {
    let response=await promiseFive
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
}
handleFive()



//  
// async function handleApi() {
//    try {
//     let url='https://catfact.ninja/fact'
//    let response=await fetch(url)
//    let result=await response.json()
//    console.log(result.fact);
//    } catch (error) {
//     console.log(error);
    
//    }
   
// }
// handleApi()


fetch('https://catfact.ninja/fact').
then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
  
}).catch((error)=>{
  console.log(error);
  
})