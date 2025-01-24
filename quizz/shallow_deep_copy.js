const original = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'swimming']
};

// Deep copy using JSON methods (simpler, but not suitable for all cases)
const deepCopy=JSON.parse(JSON.stringify(original))

// Modifying the deep copy
deepCopy.name = 'Bob';
deepCopy.hobbies.push('cycling');

console.log(original.name);  // Alice (not affected)
console.log(original.hobbies);  // ['reading', 'swimming'] (not affected)
console.log(deepCopy.hobbies);  // ['reading', 'swimming', 'cycling']


//

