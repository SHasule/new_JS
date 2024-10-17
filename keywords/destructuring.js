

 let colors=["red","blue","green","pink"]
 
  // let [firstcolor,sec,third]=colors;
  // console.log(firstcolor);

  let {2:thirdcolor}=colors
 console.log(thirdcolor);
 


  let user={
    name:"suraj",
    age:21,
    address:{
      city:"latur",
      state:"maharastra"
    }

  }

  let {name,age}=user
  console.log(name);
  console.log(age);

  const {address:{city}}=user;
  console.log(city);
  
  
  // function
  function printname({name}){
    console.log(`username is ${name} `);
    
  }
  printname(user)

  // function through array
  let username=["vivek","show","que","mir"]

  function naming({2:a,3:b}){
    console.log(`firstuser:${a} and secuser:${b} `);
  }
naming(username)
  