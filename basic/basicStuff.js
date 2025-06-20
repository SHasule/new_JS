let date=new Date()
console.log(date.toISOString());

let mydate=new Date(2023,1,23,9,1)
console.log(mydate.toString());

let timeStamp=Date.now()
console.log(timeStamp);
console.log(mydate.getTime());

let newDate=new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());


const arr=[2,3,4,6,7]
arr.push(99)
arr.shift()
arr.unshift(1)
arr.pop()
console.log(arr);

const newArry=arr.join()
console.log(newArry);


const A=[2,3,4,6,1]
 
const sliced=A.slice(1,3)
console.log(sliced,' sliced array');
console.log(A,"original");

const spliced=A.splice(1,4)
console.log(`${spliced} spliced arry`);
console.log(A ,' orginal');



const superhero=['sodi','sakha','jetha']
const superDon=['daya','tapu']

// const tkomc=superhero.concat(superDon)
const tkomc=[...superDon,...superhero]
console.log(tkomc);
console.log(Array.isArray(superDon));



const arryInArry=[12,33,44,[22,32,3,[323,422]]]
const newA=arryInArry.flat(Infinity)
console.log(newA);


const s1=12
const s2=44
const s3=45
console.log(Array.of(s1,s2,s3));

