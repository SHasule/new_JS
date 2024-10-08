
 let wrapper=document.querySelector('.wrapper')

 wrapper.addEventListener("click",function(e){
  if(e.target.nodeName=="SPAN")
  console.log("span clicked", e.target.textContent);
  console.log(e.target.nodeName);
  
 })