let cities=["pune","mumbai","hydra","pimpri"]

// map creates new array

const cityname= cities.map((city,index)=>{
console.log(city,index);
return city.toUpperCase()

}) 
console.log(cityname);
