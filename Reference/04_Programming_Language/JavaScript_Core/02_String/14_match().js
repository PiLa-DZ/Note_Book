// A search for "ain" using a string:
let text = "The rain in SPAIN stays mainly in the plain";

let result = text.match("ain");

console.log(result);
//: 
// [
//    'ain',
//    index: 5,
//    input: 'The rain in SPAIN stays mainly in the plain',
//    groups: undefined
// ]

// Note: --> You can use RegExp

// Description:
// The match() method matches a string against a regular expression **
// The match() method returns an array with the matches.
// The match() method returns null if no match is found.

// Note:
// ** If the search value is a string, it is converted to a regular expression.

// See Also:
    // String Match
    // Regular Expression Tutorial
    // Regular Expression Reference

// Syntax:
// string.match(match)

// Parameters:
// match	Required.  // The search value.  // A regular expression (or a string that will be converted to a regular expression).

// Return:
// An array
// or null	An array containing the matches.
// null if no match is found.

// The Difference Between:
// String match() and String search()
// The match() method returns an array of matches.
// The search() method returns the position of the first match.

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
// Example	Description
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// match() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers


