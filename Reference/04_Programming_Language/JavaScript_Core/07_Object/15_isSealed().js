// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Seal Object
Object.seal(person);

// This will return true
let answer = Object.isSealed(person);
console.log('answer', answer);
//: true

// Description:
// The Object.isSealed() returns true if an object is sealed.

// Syntax:
// Object.isSealed(object)

// Parameters:
	// object 	Required.
		// The object to check.

// Return:
	// Boolean	true if the object is sealed.
		// false if not.

// History:
// Object.isSealed() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
