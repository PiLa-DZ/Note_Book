// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(person);
console.log('keys', keys);
//: [ 'firstName', 'lastName', 'age', 'eyeColor' ]

// Description:
// The Object.keys() method returns an array with the keys of an object.
// The Object.keys() method does not change the original object.

// Syntax:
// Object.keys(object)

// Parameters:
	// object 	Required.
		// An iterable object.

// Return:
	// Array	An array containing the keys of the object.

// History:
// Object.keys() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
