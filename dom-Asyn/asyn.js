
// function sync(){
//   console.log("first");
  
// }
// sync()

// console.log("sec");

setTimeout(function(){
  console.log("third");
})

function sync(){
  console.log("first");
}
sync()

console.log("sec");


//  async alway's return promise
async function abcd(){
  return "abcd"
}
console.log(abcd());


