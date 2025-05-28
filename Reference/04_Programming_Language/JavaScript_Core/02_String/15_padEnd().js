let str_1 = "5";
let result_1 = str_1.padEnd(4,"0");
console.log(result_1);
//: 5000

let str_2 = "5";
let result_2 = str_2.padEnd(4,"x");
console.log(result_2);
//: 5xxx

// Description:
// The padEnd() method pads a string at the end.
// The padEnd() method pads a string with another string (multiple times) until it reaches a given length.

// See Also:
// The padStart() Method
// The trim() Method
// The trimEnd() Method
// The trimStart() Method

// Note:
// The padEnd() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.
// Example
	// let numb = 5;
	// let text = numb.toString();
	// let padded = text.padEnd(4,"0");

// Syntax:
// string.padEnd(length, string)

// Parameters:
// length	Required.  // The length of the resulting string.
// string	Optional.  // The string to pad with.  // Default is space.

// Return:
// A string	A String of the specified length, with the padding applied at the end.

// History:
// padEnd() is an ECMAScript 2017 feature.
// ES2017 is supported in all modern browsers since September 2017

