// Example 1 ============================
let text_1 = "Visit W3Schools";
let pattern_1 = /w3schools/i;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'W3Schools', index: 6, input: 'Visit W3Schools', groups: undefined ]

// -------------------------------------------------------------------------
// More Examples
// Do a case-insensitive search for "w3schools" in a string:
// -------------------------------------------------------------------------

// Example 2 ============================
// Using the RegExp function exec()::
let text_2 = "Visit W3Schools";
let pattern_2 = /w3schools/i;
let result_2 = pattern_2.exec(text_2);

console.log('result_2', result_2);
//: [ 'W3Schools', index: 6, input: 'Visit W3Schools', groups: undefined ]

// Example 3 ============================
// Using the RegExp function test()::
let text_3 = "Visit W3Schools";
let pattern_3 = /w3schools/i;
let result_3 = pattern_3.test(text_3);

console.log('result_3', result_3);
//: true

// Example 4 ============================
// Using the String function match():
let text_4 = "Visit W3Schools";
let pattern_4 = /w3schools/i;
let result_4 = text_4.match(pattern_4);

console.log('result_4', result_4);
//: [ 'W3Schools', index: 6, input: 'Visit W3Schools', groups: undefined ]

// -------------------------------------------------------------------------
// Tip
// You can use the ignoreCase property to check if the "i" modifier is set.
// -------------------------------------------------------------------------

// Example 5 ============================
let text_5 = "Visit W3Schools!";
let pattern_5 = /W3S/i;
let result_5 = pattern_5.ignoreCase;

console.log('result_5', result_5);
//: true

// Description:
	// The "i" modifier specifies a case-insenitive match.

// Syntax:
	// new RegExp("regexp", "i")
	// or simply:
	// /regexp/i 

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /regexp/i is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:


