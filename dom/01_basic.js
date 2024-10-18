
const para=document.querySelector(".para");
para.addEventListener("click",function(e){
console.log(e);
}
)

const atag=document.querySelectorAll("a")
 
 const seclink=atag[1]
 seclink.addEventListener("click",function(e){
  e.preventDefault()
  console.log("link prevented");
  
 })


//  const myDiv=document.createElement("div")

//  function paragraph(e){
//   // console.log("clicked on para"); 
//   console.log('para clicked'+e.target.textContent);
  
//  }
//  myDiv.addEventListener("click",paragraph)

//  for(let i=0;i<=50;i++){
   
//   let newelement=document.createElement("p")
//   newelement.textContent="this is para no"+i;


//  myDiv.appendChild(newelement)
//  }
//  document.body.appendChild(myDiv)


let content=document.querySelector(".content")

content.addEventListener("click",function(e){
  if(e.target.nodeName==="SPAN"){
    console.log("clicked on span",e.target.textContent);
  }

// console.log(e.target.nodeName);


})