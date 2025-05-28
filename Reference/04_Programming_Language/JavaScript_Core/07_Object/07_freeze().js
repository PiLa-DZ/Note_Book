"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person)

// This will throw an error
person.age = 51;
//:Error Cannot assign to read only property 'age' of object

// Description:
// The Object.freeze() method prevents any changes to an object.
// The Object.freeze() method will fail silently in non-strict mode.
// The Object.freeze() method will throw a TypeError in strict mode.
// Frozen objects are read-only. No modification, addition or deletion of properties are allowed.
// The Object.isFrozen() method can be used to check if an object is frozen.

// Syntax:
// Object.freeze(object)

// Parameters:
	// object 	Required.
		// The object to freeze.

// Return:
// Object	The frozen object.

// History:
// Object.freeze() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
