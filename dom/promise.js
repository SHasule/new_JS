

 let mypromise=new Promise((reslove,reject)=>{
  setTimeout(()=>{
    console.log("learning promise");
    
  },3000)
  reslove(232)
  // reject(new Error("error aya hai"))
 })
 
 console.log("hello ji");

 let mypromise2=new Promise((reslove,reject)=>{
  setTimeout(()=>{
    console.log("learning promise 2");
    
  },2000)
  reslove(232)
  // reject(new Error("error aya hai"))
 })
 
 console.log("hello ji");

 

 