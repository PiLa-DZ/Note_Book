// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get Properties
let descriptor = Object.getOwnPropertyDescriptor(person);
console.log('descriptor', descriptor);
//: descriptor undefined

// Description:
// The Object.getOwnPropertyDescriptor() method returns the property descriptors of an object.
// The Object.getOwnPropertyDescriptor() method does not change the original object.

// Syntax:
// Object.getOwnPropertyDescriptor(object)

// Parameters:
	// object 	Required.
		// An iterable object.

// Return:
// Array	An interable array containing the keys of the object.

// History:
// Object.getOwnPropertyDescriptor() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
