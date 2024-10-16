

//  pass function inside function- it's high order function
 function one(name){
  console.dir(name);
  name()
 }
//  const a=one('suraj')
//  one()

 function two(){
  console.log("hasule");
  
 }
 one(two)
//  one("suraj")

