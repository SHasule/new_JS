let cities=["pune","nashik","mumbai","hydra","pimpri"]

const cityname=cities.filter((city)=>{
  
 return Icity= city.includes('i')
})
console.log(cityname);


const students=[
  {
    name:"kiran",
    age:22,
  },
  {
    name:"shyam",
    age:42,
  },
  {
    name:"mahesh",
    age:11,
  },
  {
    name:"raju",
    age:17,
  },
] 
// const maturestd= students.filter((student)=>{
//  console.log(student);
//  return student.age>=18
// })
// console.log(maturestd);

const stdname= students.filter((student)=>{
  console.log(student);
  return student.age>=18
 }).map((student)=>{
 return student.name
 })
console.log(stdname);

