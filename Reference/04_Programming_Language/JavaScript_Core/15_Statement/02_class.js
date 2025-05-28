// Create a Car class, and then an object (myCar) based on the Car class:
// Create a Car class
class Car {
constructor(brand) {
    this.carname = brand;
  }
}

// Create a Car Object
myCar = new Car("Ford");

console.log(myCar);
//: Car { carname: 'Ford' }

// Description:
	// A class is a type of object template.
	// The class statement initiates a JavaScript class.
	// Properties and methods are assigned in the constructor() method.
	// The constructor() method is called each time a class object is initialized.

// See Also:
// JavaScript Classes.

/* Note: ---------------------------------------------------

	The syntax in a class must be written in "strict mode".

	Unlike functions, class declarations are not hoisted (you must declare a class before you can use it).

--------------------------------------------------------- */

// Syntax:
	// class className {
	  // class body
	// }

// History:
// class is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
