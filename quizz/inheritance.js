
 const animal={
  type:"animal",
  speak(){
    console.log(`every animal can speak in their own way `);  
  }
 }
 const dog=Object.create(animal)
 
 dog.name="lie"
 dog.bark=function(){
  console.log(`dog and bark`); 
 }

 dog.speak();
 dog.bark()
console.log(dog.name);
