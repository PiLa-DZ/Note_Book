"use strict"
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person)

// Test Error
let text = "";
try {
  person.nationality = "English";
}
catch (err) {
  text = err;
}

console.log(text);
//: TypeError: can't define property "nationality": Object is not extensible

// Description:
// The Object.preventExtensions() method prevents adding properties to an object.
// You can use Object.isExtensible() to check if an object is extensible.

// Syntax:
// Object.preventExtensions(object)

// Parameters:
	// object 	Required.
		// The object to prevent extensions to.

// Return:
// Object	The object that was modified.

// History:
// Object.preventExtensions() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
