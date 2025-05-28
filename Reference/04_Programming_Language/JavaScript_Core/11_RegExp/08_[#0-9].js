// Example 1 ==========================================================
// A global search for numbers that are NOT from 1 to 4:
let text_1 = "123456789";
let pattern_1 = /[^1-4]/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ '5', '6', '7', '8', '9' ]

// Example 2 ==========================================================
// A global search for numbers that are NOT 1:
let text_2 = "12121212";
let pattern_2 = /[^1]/g;
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ '2', '2', '2', '2' ]

// Example 3 ==========================================================
// A global search for numbers that are NOT from 5 to 8:
let text_3 = "123456789";
let pattern_3 = /[^5-8]/g;
let result_3 = text_3.match(pattern_3);

console.log('result_3', result_3);
//: [ '1', '2', '3', '4', '9' ]

// Description:
// The [^0-9] expression is used to find any character that is NOT a digit.
// The digits inside the brackets can be any numbers or span of numbers from 0 to 9.
// Tip: Use the [0-9] expression to find any character between the brackets that is a digit.

// Syntax:
	// new RegExp("[^0-9]")
	// or simply:
	// /[^0-9]/
// Syntax with modifiers
	// new RegExp("[^0-9]", "g")
	// or simply:
	// /[^0-9]/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /[^0-9]/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
