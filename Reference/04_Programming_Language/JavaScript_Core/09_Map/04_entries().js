// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// List all Entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}

console.log('text', text);
//: apples,500bananas,300oranges,200

// Description:
// The entries() method returns an iterator object with the [key,values] in a map.
// The entries() method does not change the original map.

// Syntax:
// map.entries()

// Parameters:
// NONE

// Return:
	// Iterator	An iterable object with the [key, values] of the map.

// History:
// map.entries() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
