// Example 1 ==========================================================
// Search a string for the character "e":
let text_1 = "The best things in life are free";
let result_1 = /e/.exec(text_1);

console.log('result_1', result_1);
/*: 
[
  'e',
  index: 2,
  input: 'The best things in life are free',
  groups: undefined
]
*/

// Example 2 ==========================================================
// Do a global search for "Hello" and "W3Schools" in a string:
let text_2 = "Hello world!";

// look for "Hello"
let result1_2 = /Hello/.exec(text_2);

// look for "W3Schools"
let result2_2 = /W3Schools/.exec(text_2);

console.log('result1_2', result1_2);
//: [ 'Hello', index: 0, input: 'Hello world!', groups: undefined ]

console.log('result2_2', result2_2);
//: null

// Description:
	// The exec() method tests for a match in a string.
	// If it finds a match, it returns a result array, otherwise it returns null.

// Syntax:
	// RegExpObject.exec(string)

// Parameter:
	// string 	Required. The string to be searched

// Return:
	// Array 	An array containing the matched text if it finds a match, otherwise it returns null

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// exec() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
