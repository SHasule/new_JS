

let mydiv=document.createElement("div");

function parastatus(e){
  console.log("clickeed on para")
}
mydiv.addEventListener('click',parastatus);

for(let i=0;i<=50;i++){
  let newpara=document.createElement("p")
  newpara.textContent="this is pora"+i;

  mydiv.appendChild(newpara)
}
document.body.appendChild(mydiv)
