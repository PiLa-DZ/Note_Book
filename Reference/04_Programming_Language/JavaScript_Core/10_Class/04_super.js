// Description
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// Tip: To understand the "inheritance" concept (parent and child classes) better, read our JavaScript Classes Tutorial.

// Create a class named "Model" which will inherit the methods from the "Car" class, by using the extends keyword.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
console.log(mycar.show());
//: I have a Ford, it is a Mustang

// Syntax:
// super(arguments);  // calls the parent constructor (only inside the constructor)
// super.parentMethod(arguments);  // calls a parent method

// Technical Details:
// JavaScript Version: 	ECMAScript 2015 (ES6)

// History:
// super is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
