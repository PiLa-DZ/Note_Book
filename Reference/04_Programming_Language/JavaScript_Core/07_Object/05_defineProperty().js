// =========================================================
// Add a property:
// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Add a new Property
Object.defineProperty(person, "year", {value:"2008"})

console.log(person);
//: { firstName: 'John', lastName: 'Doe', language: 'EN' }

// =========================================================
// Change a property:
// Create an object:
const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Change a property
Object.defineProperty(person2, "language", {value:"NO"})

console.log(person2);
//: { firstName: 'John', lastName: 'Doe', language: 'NO' }

// Description:
// The Object.defineProperty() method adds or changes an object property.
// The Object.defineProperty() method lets you change property metadata.
// The Object.defineProperty() method lets you add getters and setters.

// Syntax:
// Object.defineProperty(object, property, descriptor)

// Parameters:
	// object 	Required.
		// The object.
	// object 	Required.
		// The property name.
	// descriptor 	Required.
		// A descriptor of the property to be added or changed:
		// value: value
		// writable : true|false
		// enumerable : true|false
		// configurable : true|false
		// get : function
		// set : function

// Return:
// Object	The passed object with the changes made.

// History:
// Object.defineProperty() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
