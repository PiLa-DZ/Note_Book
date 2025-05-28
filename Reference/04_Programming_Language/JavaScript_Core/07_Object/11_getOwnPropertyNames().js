// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get Properties
let props = Object.getOwnPropertyNames(person);
console.log('props', props);
//: [ 'firstName', 'lastName', 'age', 'eyeColor' ]

// Description:
// The Object.getOwnPropertyNames() method returns an array with the properties of an object.
// The Object.getOwnPropertyNames() method does not change the original object.

// Syntax:
// Object.getOwnPropertyNames(object)

// Parameters:
	// object 	Required.
		// An iterable object.

// Return:
// Array	An array containing the properties of the object.

// History:
// Object.getOwnPropertyNames() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
