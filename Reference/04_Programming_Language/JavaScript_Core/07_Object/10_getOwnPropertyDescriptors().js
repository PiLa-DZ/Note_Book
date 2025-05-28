// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get Properties
let descriptors = Object.getOwnPropertyDescriptors(person);
console.log('descriptors', descriptors);
/*:
{
  firstName: {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Doe',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 50, writable: true, enumerable: true, configurable: true },
  eyeColor: {
    value: 'blue',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/

// Description:
// The Object.getOwnPropertyDescriptors() method returns the property descriptors of an object.
// The Object.getOwnPropertyDescriptors() method does not change the original object.
// Object.getOwnPropertyDescriptors() returns the descriptors of all properties.

// Syntax:
// Object.getOwnPropertyDescriptors(object)

// Parameters:
	// object 	Required.
		// The object to get the property descriptors from.

// Return:
// Object	An object containing the property descriptors.

// History:
// Object.getOwnPropertyDescriptors() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
