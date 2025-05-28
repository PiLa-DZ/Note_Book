let text = "Visit W3Schools!";
let pattern = /W3S/i;
let result = pattern.ignoreCase;

console.log('result', result);
//: true

// Description:
	// The ignoreCase property specifies whether or not the "i" modifier is set.
	// This property returns true if the "i" modifier is set, otherwise it returns false.

// Syntax:
	// RegExpObject.ignoreCase

// Return:
	// Boolean 	Returns true if the "i" modifier is set, false otherwise

// History:
// ignoreCase is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
