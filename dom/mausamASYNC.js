
async function utility(){
 let delhimausam=new Promise((resolve,reject)=>{
  setTimeout(()=>{
       resolve("delhi");
  },4000)

 });

 let hydmausam=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("hydrabadd")
   },6000)
 });

 let dm=await delhimausam;
 let hy= await hydmausam;

 return [dm,hy]

}