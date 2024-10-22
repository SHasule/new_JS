
async function utility(){
  let checkapi=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let response= await checkapi.json();
  console.log(response.title);
  
}
 