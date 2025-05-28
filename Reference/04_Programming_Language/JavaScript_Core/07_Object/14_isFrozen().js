// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Freeze Object
Object.freeze(person);

// This will return true
let text = Object.isFrozen(person);
console.log('text', text);
//: true

// Description:
// The Object.isFrozen() returns true if an object is frozen.

// Syntax:
// Object.isFrozen(object)

// Parameters:
	// object 	Required.
		// The object to check.

// Return:
	// Boolean	true if the object is frozen.
		// false if not.

// History:
// Object.isFrozen() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
