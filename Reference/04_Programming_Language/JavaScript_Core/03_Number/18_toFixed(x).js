// Example 1
let num_1 = 5.56789;
let result_1 = num_1.toFixed();
console.log(result_1);
//: 6

// Example 2
let num_2 = 5.56789;
let result_2 = num_2.toFixed(2);
console.log(result_2);
//: 5.57

// Description:
// The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.

// Note:
// If the number of decimals are higher than in the number, zeros are added.

// Syntax:
// number.toFixed(x)

// Parameters:
// x 	Optional.  // Number of decimals.  // Default is 0 (no decimals)

// Return:
// A string	The representation of a number with (or without) decimals.

// More Examples:
	// Round to 10 decimals
	// let num = 5.56789;
	// let n = num.toFixed(10);

// History:
// toFixed() is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers
