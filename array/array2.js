
// searching array element in non-primitive data type

let course=[
    {
      name:"mobile dev",
      price:322
    },  
    {
      name:"web dev",
      price:322
    }
]

let findcourse=course.find(function(c){
  return c.name=="java dev"
})

// let findcourse=course.find((course)=>{
//   return course.name="java"
// })
console.log(findcourse);
