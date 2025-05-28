// Create a class named "Model" which will inherit the methods from the "Car" class:
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

// Description:
// The extends keyword is used to create a child class of another class (parent).
// The child class inherits all the methods from another class.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
// Note: From the example above; The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// Syntax:
// class childClass extends parentClass

// Technical Details:
// JavaScript Version: 	ECMAScript 2015 (ES6)

// History:
// extends is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
