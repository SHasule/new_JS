

for(let i=0; i<=10;i++){
 // console.log(i);
  
}

for(let i=0;i<=10;i++){
  for(let j=0;j<=10;j++){
    //console.log(`${i}*${j}= ${i*j}`);  
  }
}

const user=['tony','joan','sam']
 for(let i=0;i<user.length;i++){
  let result=user[i]
  //console.log(result);
  
 }


 let heros=['tony','jony','somy']
 let a=0
 while(a<heros.length){
//  console.log(`${heros[a]}`);
  a++
 }


 //for of

let hero=['tony','jony','somy']
 for(const each of hero){
 // console.log(`${each}`);
 }

 const name="hello world"
 for(const n of name){
   if(n==" "){
    continue
   }
  console.log(n);
  
 }

 //for in
 const language={
  js:'javascript',
  hi:"hindi",
  ma:"marathi"
 }
 for(const key in language){
 // console.log(`${key} = ${language[key]}`);
  
 }


 const lang=['java','py','ruby']
 for (const key in lang){
  // console.log(` lang ${lang[key]}`); 
 }
 //foreach

 const langu=['java','py','ruby']

//  function printme(item){
//   console.log(item);
//  }
//  langu.forEach(printme)

 langu.forEach((item)=>{
  console.log(item);
 })



 // filter
 const num=[1,2,3,4,5,6]
 let greaterNum= num.filter((n)=>{
     return n>3
  })
console.log(greaterNum);


const mynum=[1,2,3,4,5]
//  let newnum=mynum.forEach((n)=>{
//   return n+10
//  })
//  console.log(newnum);
let newnum=mynum.map((n)=>{
  return n+10
})
 console.log(newnum);
 

 //reduce

 const reduceNum=[2,4,5,6]
  let total=reduceNum.reduce((acc,curval)=>{
    console.log(`acc ${acc} and curval ${curval}`);
    
    return acc+curval
  },0)
  console.log(total);
  