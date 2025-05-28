// Create a Set
const letters = new Set(["a","b","c"]);

// Does the Set contain "d"?
let answer = letters.has("d");
console.log('answer', answer);
//: false

// Description:
// The has() method returns true if a specified value exists in a set.

// Syntax:
// set.has(value)

// Parameters:
	// value 	Required.
		// The value to test for.

// Return:
	// Boolean	true if the value exists, otherwise false.

// History:
// set.has() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
