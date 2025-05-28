// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";

console.log(person);
// { firstName: 'John', lastName: 'Doe' }

console.log(man);
// { firstName: 'Peter' }

// Description:
// The Object.create() creates an object from an existing object.

// Syntax:
// Object.create(object, properties)

// Parameters:
	// object 	Required.
		// An existing object.
	// properties 	Optional.
		// A descriptor of properties to be added or changed:
		// value: value
		// writable : true|false
		// enumerable : true|false
		// configurable : true|false
		// get : function
		// set : function

// Return:
	// Object	The created object.

// History:
// Object.create() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
