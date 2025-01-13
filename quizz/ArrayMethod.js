

const firstArray=[7,3,2,7,8]
console.log(firstArray.indexOf(3));


let findArray=firstArray.find((num)=>(
 num!=3
))
console.log(findArray);

let FilterArray=firstArray.filter((num)=>{
 return num!=3
})
console.log(FilterArray);



console.log("slice and splice");

const originalArray=[3,7,0,2,5,8,1]
console.log("original array:" ,originalArray);

const slicedArray=originalArray.slice(1,4)
console.log("sliced array",slicedArray);
console.log("original array",originalArray);

const splicedArray=originalArray.splice(1,4)
console.log("sliced array",splicedArray);
console.log("original array",originalArray);



console.log("push and concat");

const pushConcatArray=[0,3,5,9,3]
pushConcatArray.push(99,11)
 console.log("original:", pushConcatArray);


 const concatArray=pushConcatArray.concat(12,30)
 console.log(concatArray);
 console.log("original:",pushConcatArray);

 console.log("splice");
 const spliceARRAY=[2,3,4,9]
  const s=spliceARRAY.splice(1,0)
  console.log(s);
  

  console.log("sort and reverse.....");

  let SortReverse=[11,2,53,9]

  console.log(SortReverse.sort());
  console.log(SortReverse.reverse());


  console.log("destruct... ");
  const nameArray=["hey","hello","hi"]
  const [first,sec,third]=nameArray
  console.log(sec);
  
  
  
  
  
  


  

 
 
 
 
 

