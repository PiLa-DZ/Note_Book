// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// List all Entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

console.log('text', text);
//: apples = 500bananas = 300oranges = 200

// Description:
// The forEach() method invokes a function for each map element:
// The forEach() method does not change the original map.

// Syntax:
// map.forEach(callback)

// Parameters:
	// callback 	Required.
		// A function to execute for each element.

// Return:
// NONE

// History:
// set.forEach() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
