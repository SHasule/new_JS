// const sym = Symbol('id');

// const obj = {
//   [sym]: 'unique value'
// };

// console.log(obj[sym]);  // unique value


const sym = Symbol('secret');
const obj = {
   [sym]: 'hidden value', 
   name: 'John'
   };

for (let key in obj) {
  console.log(key);  // Logs only 'name', not the symbol
}

console.log(Object.keys(obj));  // ['name']
