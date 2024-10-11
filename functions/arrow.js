function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++; // `this` refers to the Person object
  }, 1000);
}

const person = new Person();