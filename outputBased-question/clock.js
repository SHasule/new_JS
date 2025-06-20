 const hours=document.getElementById("hours")
 const min=document.getElementById("min")
 const sec=document.getElementById("sec")
 const AMPM=document.getElementById("AMPM")

const getdate=document.getElementById("getdate")

 function time(){
  const date = new Date();
 let hour = date.getHours();
 hours.innerText=hour
 let mini=date.getMinutes()
 min.innerText=mini
 let secnod=date.getSeconds()
 sec.innerText=secnod 

  if(hour>12){
    hour=hour-12
    AMPM.innerHTML= "PM"
    hours.innerText=hour
  }

  else{
    AMPM.innerHTML= "AM"
    hours.innerText=hour
  }

           if(hour < 10){
            hours.innerText= "0"+hour
           }
           if(mini < 10){
            min.innerText= "0"+mini
           }
           if(secnod < 10){
            sec.innerText= "0"+secnod
           }

 }

  setInterval(time,1000)



 
 