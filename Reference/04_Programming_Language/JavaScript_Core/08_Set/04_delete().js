// Create a Set
const letters = new Set(["a","b","c"]);

// Remove one Element
letters.delete("a");

console.log('letters', letters);
//: Set(2) { 'b', 'c' }

// Description:
// The delete() method removes a specified value from a set.

// Syntax:
// set.delete(value)

// Parameters:
	// value 	Required.
		// The value to remove.

// Return:
	// Boolean	true if the value existed, otherwise false.

// History:
// set.delete() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
