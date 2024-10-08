// function screen(){
//   console.log("i have clicked on screen");
// }
// document.addEventListener("click",screen)


// document.removeEventListener("click",screen)


// event object
let button=document.querySelector('#button');
button.addEventListener("click",function(event){
  console.log(event);
  
})
