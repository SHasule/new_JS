
//rest operator

function takingNumbers(a,...value){
  console.log("using rest operator");
  return value
}
 let numbers=takingNumbers(2,4,1,2,13,4)
//  console.log(numbers);
 

//  default parameter
console.log('default parameters');

  function interest(p,r=5,y=9){
    return p*r*y/100
  }
  console.log(interest(2000));
  