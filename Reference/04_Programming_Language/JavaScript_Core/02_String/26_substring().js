// Example 1 ============================
// Extract a substring from text:
let str_1 = "Hello world!";

let result_1 = str_1.substring(1, 4);

console.log(result_1);
//: ell

// Example 2 ============================
// Start from position 2:
let str_2 = "Hello world!";

let result_2 = str_2.substring(2);

console.log(result_2);
//: llo world!

// Description:
// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.
// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
// Start or end values less than 0, are treated as 0.

// See Also:
// The split() Method
// The slice() Method
// The substr() Method

// Syntax:
// string.substring(start, end)

// Parameters:
// start 	Required.  // Start position.  // First character is at index 0.
// end 	Optional.  // End position (up to, but not including).  // If omitted: the rest of the string.

// Return:
// A string	A string containing the extracted characters.

// More Examples:

	// If start is greater than end, parameters are swapped:
	// let result = text.substring(4, 1);

	// If "start" is less than 0, it will start from index 0:
	// let result = text.substring(-3);

	// Only the first:
	// let result = text.substring(0, 1);

	// Only the last:
	// let result = text.substring(text.length - 1);

// History:
// substring() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

