// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Does the map has apples?
let x = fruits.has("apples");

console.log('x', x);
//: true

// Description:
// The has() method returns true if a key exists in a map.

// Syntax:
// map.has(value)

// Parameters:
	// value 	Required.
		// The key to test for.

// Return:
	// Boolean	true if the key exists, otherwise false.

// History:
// map.has() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
