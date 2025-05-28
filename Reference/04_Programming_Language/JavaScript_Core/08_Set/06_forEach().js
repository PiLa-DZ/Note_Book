// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})

console.log('text', text);
//: abc

// Description:
// The forEach() method invokes a function for each set element:
// The forEach() method does not change the original set.

// Syntax:
// set.forEach(callback)

// Parameters:
	// callback 	Required.
		// A function to execute for each element.

// Return:
// NONE

// History:
// set.forEach() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
