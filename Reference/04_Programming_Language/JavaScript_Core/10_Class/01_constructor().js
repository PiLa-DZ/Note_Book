// Create a Car class, and then create an object called "mycar" based on the Car class:
class Car {
  constructor(brand) {  // Constructor
    this.carname = brand;
  }
}
mycar = new Car("Ford");

console.log('mycar', mycar);
//: Car { carname: 'Ford' }

// Description:
// The constructor() method is a special method for creating and initializing objects created within a class.
// The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
// Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.
// You can use the super() method to call the constructor of a parent class (see "More Examples" below).

// Syntax:
// constructor(parameters)

// Technical Details:
// JavaScript Version: 	ECMAScript 2015 (ES6)

// History:
// constructor() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
