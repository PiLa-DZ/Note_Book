// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Get the Value of "apples"
let value = fruits.get("apples");

console.log('value', value);
//: 500

// Description:
// The get() method gets the value of a key in a map.

// Syntax:
// map.get(key)

// Parameters:
	// key 	Required.
		// The key to test for.

// Return:
	// Variable	The element found or undefined if the key is not in the map.

// History:
// map.get() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
