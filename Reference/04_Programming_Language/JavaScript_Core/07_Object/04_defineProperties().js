// Add properties:
// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Add Properties
Object.defineProperties(person, {
  language: {value: "en"},
  year: {value: "Hello"}
});

console.log(person);
// --> Note: Print in browser
//:
// Object { firstName: "John", lastName: "Doe", … }
// firstName: "John"
// language: "en"
// lastName: "Doe"
// year: "Hello"
// <prototype>: Object { … }

// Description:
// The Object.defineProperties() method adds or changes object properties.
// The Object.defineProperties() method lets you change property metadata.
// The Object.defineProperties() method lets you add getters and setters.

// Syntax:
// Object.defineProperty(object , property, descriptor)

// Parameters:
	// object 	Required.
		// The object.
	// object 	Required.
		// The property name.
	// descriptor 	Required.
		// A descriptor of the properties to be added or changed:
		// value: value
		// writable : true|false
		// enumerable : true|false
		// configurable : true|false
		// get : function
		// set : function

// Return:
// Object	The object beeing passed, with the changes made.

// History:
// Object.defineProperties() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
