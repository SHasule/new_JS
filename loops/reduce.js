
 
  const mynum=[1,2,3]
  let total=mynum.reduce((acc,curval)=>{
   console.log(`acc:${acc} and curval${curval}`);
   
    return acc+curval
  },0)
  console.log(total);
  

  const shoppingCart=[
    {
      coursename:"js",
      price:99,
    },
    {
      coursename:"react",
      price:999,
    },
    {
      coursename:"mobile app",
      price:1199,
    },
    {
      coursename:"web",
      price:3399,
    },
  ]

const totalcoursePrice= shoppingCart.reduce((acc,item)=>{
  return acc+item.price
  },0)
  console.log(totalcoursePrice);
  