 
 async function helper(){

   let options={
    method: 'POST',
    body: JSON.stringify({
      title: 'suraj',
      body: 'im coder',
      learn:"js",
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
   }
  let POST_fetch= await fetch('https://jsonplaceholder.typicode.com/posts',options)
  let response=POST_fetch.json();
  return response
   
  }

  async function utility(){
    let ans= await helper()
    console.log(ans);
    
  }
  utility()