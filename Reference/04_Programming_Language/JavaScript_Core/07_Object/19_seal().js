"use strict"
// Create Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Seal Object
Object.seal(person)

// Test Error
let text = "";
try {
  delete person.age;
}
catch (err) {
  text = err;
}
console.log('text', text);
//: TypeError: Cannot delete property 'age' of #<Object> at Object.<anonymous>

// Description:
// The Object.seal() method prevents additions or deletions of new properties.
// The Object.seal() method makes existing properties non-configurable.
// The Object.seal() method will fail silently in non-strict mode.
// The Object.seal() method will throw a TypeError in strict mode.
// The Object.isSealed() method can be used to check if an object is sealed.

// Syntax:
// Object.seal(object)

// Parameters:
	// object 	Required.
		// The object to seal.

// Return:
// Object	The sealed object.

// History:
// Object.seal() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
