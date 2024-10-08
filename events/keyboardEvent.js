
let div=document.createElement("div");
// Keydown event
document.addEventListener("keydown", function(event) {
  console.log("Key pressed: " + event.key);
   
  let p=document.createElement("p");
  p.textContent=event.key

  div.appendChild(p)
});
// document.body.appendChild(div)



document.getElementById("myForm").addEventListener("submit", function(event) {
  alert("Form submitted!");
  event.preventDefault();  // Prevent form from being submitted
});