// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person);

// This will return false
let answer = Object.isExtensible(person);
console.log('answer', answer);
//: false

// Description:
// The Object.isExtensible() returns true if an object is extensible.

// Syntax:
// Object.isExtensible(object)

// Parameters:
	// object 	Required.
		// The object to check.

// Return:
	// Boolean	true if the object is extensible.
		// false if not.

// History:
// Object.isExtensible() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
