// Example 1
let num_1 = 15;
let result_1 = num_1.toString();
console.log(result_1);
//: 15

// Example 2
// Convert a number to a string, using base 2 (binary):
let num_2 = 15;
let result_2 = num_2.toString(2);
console.log(result_2);
//: 1111

// Description:
// The toString() returns a number as a string.

// Note:
// Every JavaScript object has a toString() method.
// The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
// Normally, you will not use it in your own code.

// Syntax:
// number.toString(radix)

// Parameters:
// radix 	Optional.
	// The base to use.
	// Must be an integer between 2 and 36.
	// Base 2 is binary
	// Base 8 is octal
	// Base 16 is hexadecimal.

// Return:
// A string	The number as a string.

// More Examples
	// Convert a number to a string, using base 8 (Octal):
	// let num = 15;
	// let text = num.toString(8);

	// Convert a number to a string, using base 16 (Hexadecimal):
	// let num = 15;
	// let text = num.toString(16);

// History:
// toString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
