// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// List all Keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}

console.log('text', text);
//: applesbananasoranges

// Description:
// The keys() method returns an iterator object with the keys in a map:
// The keys() method does not change the original met.

// Syntax:
// map.keys()

// Parameters:
// NONE

// Return:
	// Iterator	An iterable object with the keys of the map.

// History:
// map.keys() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
