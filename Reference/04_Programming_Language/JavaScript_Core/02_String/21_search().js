// Example 1
// Search for "Blue":
let str_1 = "Mr. Blue has a blue house";
let result_1 = str_1.search("Blue");

console.log(result_1);
//: 4

// Example 2
// Search for "blue":
let str_2 = "Mr. Blue has a blue house";
let result_2 = str_2.search("blue");

console.log(result_2);
//: 15

// Example 3
// Search for /Blue/:
let str_3 = "Mr. Blue has a blue house";
let result_3 = str_3.search(/Blue/);

console.log(result_3);
//: 4

// Example 4
// Search for /blue/:
let str_4 = "Mr. Blue has a blue house";
let result_4 = str_4.search(/blue/);

console.log(result_4);
//: 15

// Example 5
// Search case insensitive:
let str_5 = "Mr. Blue has a blue house";
let result_5 = str_5.search(/blue/i);

console.log(result_5);
//: 4

// Description:
// The search() method matches a string against a regular expression **
// The search() method returns the index (position) of the first match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive.

// Note:
// ** If the search value is a string, it is converted to a regular expression.

// See Also:
    // String Search
    // Regular Expression Tutorial
    // Regular Expression Reference

// Syntax:
// string.search(searchValue)

// Parameters:
// searchValue	Required.  // The search value.  // A regular expression (or a string that will be converted to a regular expression).

// Return:
// A number	The position of the first match.
// -1 if no match.

// The Difference Between:
// String search() and String indexOf()
// The search() cannot take a start position argument.
// The indexOf() method cannot search against a regular expression.

// The Difference Between:
// String search() and String match()
// The search() method returns the position of the first match.
// The match() method returns an array of matches.

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
// Example	Description
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// search() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

