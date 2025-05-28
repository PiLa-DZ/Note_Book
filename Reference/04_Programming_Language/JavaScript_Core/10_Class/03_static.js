// Create a static method and call it on the class:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {  // static method
    return "Hello!!";
  }
}

mycar = new Car("Ford");

//Call 'hello()' on the class Car:
console.log(Car.hello());
//: Hello!!

//and NOT on the 'mycar' object:
//document.getElementById("demo").innerHTML = mycar.hello();
//this would raise an error. 

// Description:
// The static keyword defines static methods for classes.
// Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.

// Syntax:
// static methodName()

// Technical Details:
// JavaScript Version: 	ECMAScript 2015 (ES6)

// History:
// static is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
