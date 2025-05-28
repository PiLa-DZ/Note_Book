// Search a string for "welcome":
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);
//: 13

// Description:
// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

// See Also:
// The lastIndexOf() Method
// The search() Method
// The match() Method

// Syntax:
// string.indexOf(searchvalue, start)

// Parameters:
// searchvalue 	Required.  // The string to search for.
// start 	Optional.  // The position to start from (default is 0).

// Return:
// A number	The first position where the search-value occurs.
// -1 if it never occurs.

// The Differense Between:
// String indexOf() and String search()
// The indexOf() method cannot search against a regular expression.
// The search() cannot take a start position argument.

// History:
// indexOf() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

