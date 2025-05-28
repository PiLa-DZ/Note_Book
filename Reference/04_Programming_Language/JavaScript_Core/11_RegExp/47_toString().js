// Example 1 ==========================================================
// Return the string value of the regular expression:
let pattern_1 = new RegExp("Hello World", "g");
let text_1 = pattern_1.toString();

console.log('text_1', text_1);
//: /Hello World/g

// Example 2 ==========================================================
// Return the string value of the regular expression:
let pattern_2 = /Hello World/g;
let text_2 = pattern_2.toString();

console.log('text_2', text_2);
//: /Hello World/g

// Description:
	// The toString() method returns the string value of the regular expression.

// Syntax:
	// RegExpObject.toString()

// Parameters:
	// None.

// Return:
	// String 	The string value of the regular expression

// History:
// toString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
