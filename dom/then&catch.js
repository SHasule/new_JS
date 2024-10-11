let mypromise=new Promise((reslove,reject)=>{
  setTimeout(()=>{
    console.log("learning promise");
    
  },3000)
  // reslove(232)
  reject(new Error("error aya hai"))
 })
 
 console.log("hello ji");
mypromise.then((value)=>{
console.log(value);
})

mypromise.catch((error)=>{
console.log(error);

})