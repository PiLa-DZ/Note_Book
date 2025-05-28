// Example 1 ===============================================================
// Creating a Map object by passing an array to the new Map() constructor:
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log('fruits', fruits);
//: Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

// Example 2 ===============================================================
// Creating a new Map object and add elements with the set() method:
// Create a Map
const fruits2 = new Map();

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);

console.log('fruits2', fruits2);
//: Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }

// Description:
// The new Map() constructor creates a Map object.

// Note:
// A Map object can only be constructed with new Map()

// Syntax:
// new Map(iterable)

// Parameters:
	// iterable 	Optional.
		// An iterable object with key-value pairs.

// Return:
	// Object	A new Map object.

// History:
// Map is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
