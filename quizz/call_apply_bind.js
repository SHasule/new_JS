
 const obj={
  name:"suraj"
 }

 function greet(age,prof){
   console.log(`hey ${this.name} age is ${age} and prof: ${prof}`);
 }
  //  greet.call(obj,23,"developer")
    // greet.apply(obj,[23,"developer"])

  const bind= greet.bind(obj)
  bind(24,"devloper")
  bind(28,"senior devloper")
  



  // sec exmaple using object


    const person1={
      name:"harsh",
      company:"google",   
    }
//  person1.work()   
    function work(city, location)
               {
                 console.log(`${this.name} work in ${this.company} in ${city} at ${location}`);       
              }


 const person2={
  name:"shyam",
  company:"amazon",
 }

 work.call(person1, "pune", "hinjewadi")
 work.call(person2, "hydrabad ", "nampalli")

 //APPLY
 work.apply(person2, ["hydrabad ", "nampalli"])

 // bind
  let bindAll=work.bind(person2, "hydrabad ", "nampalli")
bindAll();
  
 

