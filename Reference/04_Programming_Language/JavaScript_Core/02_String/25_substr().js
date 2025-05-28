// Example 1
// Extract a substring from text:
let str_1 = "Hello world!";

let result_1 = str_1.substr(1, 4);

console.log(result_1);
//: ello

// Example 2
// Start at position 2:
let str_2 = "Hello world!";

let result_2 = str_2.substr(2);

console.log(result_2);
//: llo world!

// Description:
// The substr() method extracts a part of a string.
// The substr() method begins at a specified position, and returns a specified number of characters.
// The substr() method does not change the original string.
// To extract characters from the end of the string, use a negative start position.

// See Also:
// The split() Method
// The slice() Method
// The substring() Method

// Syntax:
// string.substr(start, length)

// Parameters:
// start 	Required.  // The start position.  // First character is at index 0.
	// If start is greater than the length, substr() returns "".
	// If start is negative, substr() counts from the end of the string.
// length 	Optional.  // The number of characters to extract.  // If omitted, it extracts the rest of the string

// Return:
// A string	A string containing the extracted part.
// If length is 0 or negative, an empty string is returned.

// More Examples:
	// Only the first:
	// let result = text.substr(0, 1);

	// Only the last:
	// let result = text.substr(text.length-1, 1);

	// The last 6:
	// let result = text.substr(-6, 6); 

// History:
// substr() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

