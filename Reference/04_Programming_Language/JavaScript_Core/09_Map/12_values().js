// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// List all values
let text = "";
for (const x of fruits.values()) {
  text += x;
}

console.log('text', text);
//: 500300200

// Description:
// The values() method returns an iterator object with the values in a map.
// The values() method does not change the original map.

// Syntax:
// map.values()

// Parameters:
// NONE

// Return:
	// Iterator	An iterable object with the values of the map.

// History:
// map.values() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
