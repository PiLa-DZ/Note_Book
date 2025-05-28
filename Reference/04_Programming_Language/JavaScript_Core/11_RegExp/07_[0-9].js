// Example 1 ==========================================================
// A global search for the numbers 1, 2, 3 and 4 in a string:
let text_1 = "123456789";
let pattern_1 = /[1-4]/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ '1', '2', '3', '4' ]

// --------------------------------------------------------------------
// Tip:
// Use the [^0-9] expression to find any character that is NOT a digit.
// --------------------------------------------------------------------

// Example 2 ==========================================================
// Do a global search for the number "1" in a string:
let text_2 = "12121212";
let pattern_2 = /[1]/g;
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ '1', '1', '1', '1' ]

// Description:
	// The [0-9] expression is used to find any character between the brackets.
	// The digits inside the brackets can be any numbers or span of numbers from 0 to 9.
	// Tip: Use the [^0-9] expression to find any character that is NOT a digit.

// Syntax:
	// new RegExp("[0-9]")
	// or simply:
	// /[0-9]/
// Syntax with modifiers
	// new RegExp("[0-9]", "g")
	// or simply:
	// /[0-9]/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /[0-9]/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
