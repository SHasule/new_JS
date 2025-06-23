

var a=10
  if(true){
    console.log(a);
    
   var a=11
  }
  console.log(a);
  

  //iffe

(  
  function hello(){
    console.log("hello");
    
  })();

  (
    (name)=>{
      console.log(`name is ${name}`);
      
    }
  )("tony")