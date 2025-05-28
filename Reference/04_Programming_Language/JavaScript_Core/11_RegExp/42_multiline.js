let text = "Visit W3Schools!";
let pattern = /W3S/gi;
let result = pattern.multiline;

console.log('result', result);
//: false

// Description:
	// The multiline property specifies whether or not the m modifier is set.
	// This property returns true if the "m" modifier is set, otherwise it returns false.

// Syntax:
	// RegExpObject.multiline

// Return:
	// Boolean 	Returns true if the "m" modifier is set, false otherwise

// History:
// multiline is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
