// Example 1
// Format a number to a specified length:
let num_1 = 13.3714;
let result_1 = num_1.toPrecision(2);
console.log(result_1);
//: 13

// Example 2
// Format a small number:
let num_2 = 0.001658853;
let result_2 = num_2.toPrecision(2);
let result_3 = num_2.toPrecision(3);
let result_4 = num_2.toPrecision(10);

console.log(result_2);
//: 0.0017
console.log(result_3);
//: 0.00166
console.log(result_4);
//: 0.001658853000

// Description:
// The toPrecision() method formats a number to a specified length.
// A decimal point and nulls are added (if needed), to create the specified length.

// Syntax:
// number.toPrecision(x)

// Parameters:
// x 	Optional.  // The number of digits.  // If omitted, the number is returned without any formatting.

// Return:
// A string	The number formatted to the specified precision.

// More Examples:
	// Format a number to a specified length:
	// let num = 13.3714;
	// num.toPrecision(2);
	// num.toPrecision(3);
	// num.toPrecision(10);

	// No formatting:
	// let num = 13.3714;
	// num.toPrecision();

// History:
// toPrecision() is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers:
