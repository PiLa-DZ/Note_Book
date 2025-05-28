const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.values(person);
console.log('text', text);
//: [ 'John', 'Doe', 50, 'blue' ]

// Description:
// The Object.values() method returns an array of the property values of an object.
// The Object.values() method does not change the original object.

// Syntax:
// Object.values(object)

// Parameters:
	// object 	Optional.
		// An object.

// Return:
// Array	An iterable array of the object's property values.

// History:
// ECMAScript 2017 added the Object.values() method to objects.
// Object.values() is supported in all modern browsers since March 2017:
