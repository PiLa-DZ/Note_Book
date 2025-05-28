// Example 1 ==========================================================
// Search a string for the character "e":
let text_1 = "The best things in life are free";
let pattern_1 = /e/;
let result_1 = pattern_1.test(text_1);

console.log('result_1', result_1);
//: true

// Example 2 ==========================================================
// Do a global search, and test for "Hello" and "W3Schools" in a string:
let text_2 = "Hello world!";

// look for "Hello"
let pattern1_2 = /Hello/g;
let result1_2 = pattern1_2.test(text_2)
 
// look for "W3Schools"
let pattern2_2 = /W3Schools/g;
let result2_2 = pattern2_2.test(text_2);

console.log('result1_2', result1_2);
//: true

console.log('result2_2', result2_2);
//: false

// Description:
	// The test() method tests for a match in a string.
	// If it finds a match, it returns true, otherwise it returns false.

// Syntax:
	// RegExpObject.test(string)

// Parameter:
	// string 	Required. The string to be searched

// Return:
	// Boolean 	Returns true if it finds a match, otherwise false

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// test() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
