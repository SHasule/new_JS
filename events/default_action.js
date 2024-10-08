

let links=document.querySelectorAll("a");
let seclink=links[1];

seclink.addEventListener("click",function(e){
  e.preventDefault();
  console.log("mdn stopped");
})


