 
 
function outer(){


 function parent(){
    const a=1;
    function add(){
      const b=2;
   console.log(a+b);
    }
    return add
  }
  return parent()
}
  let add1=outer()
  console.log(add1); 