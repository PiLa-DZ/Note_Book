// Example 1 ========================
// Slice the first 5 positions:
let str_1 = "Hello world!";

let result_1 = str_1.slice(0, 5);

console.log(result_1);
//: Hello

// Example 2 ========================
// From position 3 to the end:
let str_2 = "Hello world!";

let result_2 = str_2.slice(3);

console.log(result_2);
//: lo world!


// Description:
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string.

// See Also
// The split() Method
// The substr() Method
// The substring() Method

// Syntax:
// string.slice(start, end)

// Parameters:
// start 	Required.  // The start position.  // (First character is 0).
// end 	Optional.  // The end position (up to, but not including).  // Default is string length.

// Return:
// A string	The extracted part of the string.

// More Examples:

	// From position 3 to 8:
	// let result = text.slice(3, 8);

	// Only the first character:
	// let result = text.slice(0, 1);

	// Only the last character:
	// let result = text.slice(-1);

	// The whole string:
	// let result = text.slice(0);

// History:
// slice() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

