

// async function checkGithub(){
//    try{
//     const response= await fetch(`https://api.github.com/users/hiteshchoudhary`)
//     const data= await response.json()
//     console.log(data);
//    }
//    catch(e){
//     console.log("error handled");
//    }
//   }
//   checkGithub()


fetch(`https://api.github.com/users/hiteshchoudhary`)
.then((response)=>{
 return response.json()
}).then((response)=>{
  console.log(response.login);
})
.catch((e)=>{
console.log(`error handled`);
})