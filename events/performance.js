

// for(let i=0; i<=100;i++){
//   let newpara=document.createElement('p');
//   newpara.textContent="this is para"+i;

//   document.body.appendChild(newpara);
// }



// const t1=performance.now()
// let mydiv=document.createElement('div')
// for(let i=0; i<=100;i++){
//   let newpara=document.createElement('p');
//   newpara.textContent="this is para"+i;

//   mydiv.appendChild(newpara)
// }

// document.body.appendChild(mydiv)
// const t2=performance.now()
// console.log("time take this",t2-t1,"s");


//document fragment


const t1=performance.now()

let fragment=document.createDocumentFragment();
for(let i=0; i<=100;i++){
  let newpara=document.createElement('p');
  newpara.textContent="this is para"+i;

  fragment.appendChild(newpara)
}

document.body.appendChild(fragment);   
// 1 reflow, 1repaint

const t2=performance.now()
console.log("time take this",t2-t1,"s");