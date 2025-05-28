let person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.entries(person);

console.log(person);
//: { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }

console.log(text);
//: [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 50 ], [ 'eyeColor', 'blue' ] ]

// Description:
// The Object.entries() method returns an array of the key/value pairs of an object.
// The Object.entries() method does not change the original object.

// Syntax:
// Object.values(object)

// Parameters:
	// object 	Optional.
		// An object.

// Return:
// Array	An iterable array of the object's key/value pairs.

// History:
// ECMAScript 2017 added the Object.entries() method to objects.
// Object.entries() is supported in all modern browsers since March 2017:
