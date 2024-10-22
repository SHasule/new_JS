let mypromise1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("promise 1");
  },2000)
  resolve(true)
  return ("hello 1")
})
.then((value)=>{
  let mypromise2=new Promise((resolve,reject)=>{
 setTimeout(()=>{
  console.log("promise 2");
 },2000)
 resolve(1000)
  })
  return("hello 2")
})
.then((value)=>{
  console.log(value);
  
})