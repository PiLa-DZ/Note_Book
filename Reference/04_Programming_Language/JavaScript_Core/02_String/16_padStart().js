let str_1 = "5";
let result_1 = str_1.padStart(4,"0");
console.log(result_1);
//: 0005

let str_2 = "5";
let result_2 = str_2.padStart(4,"x");
console.log(result_2);
//: xxx5

// Description:
// The padStart() method pads a string from the start.
// The padStart() method pads a string with another string (multiple times) until it reaches a given length.

// See Also:
// The padEnd() Method
// The trim() Method
// The trimEnd() Method
// The trimStart() Method

// Note:
// The padStart() method is a string method.
// To pad a number, convert the number to a string first.
// See the example below.
// Example
	// let numb = 5;
	// let text = numb.toString();
	// let padded = text.padStart(4,"0");

// Syntax:
// string.padStart(length, string)

// Parameters:
// length	Required.  // The length of the resulting string.
// string	Optional.  // The string to pad with.  // Default is space.

// Return:
// A string	A String of the specified length, with the padding applied from the start.

// History:
// padStart() is an ECMAScript 2017 feature.
// ES2017 is supported in all modern browsers since September 2017

