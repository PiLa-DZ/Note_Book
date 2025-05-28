// Example 1 ==============================================================
// Do a multiline search for "is" at the beginning of each line in a string:
let text_1 = `Is this
all there
is`

let pattern_1 = /^is/m;

let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'is', index: 18, input: 'Is this\nall there\nis', groups: undefined ]

// ------------------------------------------------------------------------
// Tip:
// The "m" modifier is case-sensitive and not global.
// To perform a global, case-insensitive search, use "m" with "g" and "i".
// ------------------------------------------------------------------------

// Example 2 ==============================================================
// A global, multiline search for "is" at the beginning of each string line:
let text_2 = `Is this
all there
is`

let pattern_2 = /^is/gm;
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ 'is' ]

// Example 3 ==============================================================
// A global, case-insensitive, multiline search for "is" at the beginning of each string line:
let text_3 = `Is this
all there
is`

let pattern_3 = /^is/gmi;
let result_3 = text_3.match(pattern_3);

console.log('result_3', result_3);
//: [ 'Is', 'is' ]

// Example 4 ==============================================================
// A global, multiline search for "is" at the end of each string line:
let text_4 = `Is this
all there
is`

let pattern_4 = /is$/gm;
let result_4 = text_4.match(pattern_4);

console.log('result_4', result_4);
//: [ 'is', 'is' ]

// ------------------------------------------------------------------------
// Tip:
// Use the multiline property to check if the m modifier is set.
// ------------------------------------------------------------------------

// Example 5 ==============================================================
// Check if the "m" modifier is set:
let text_5 = "Visit W3Schools!";
let pattern_5 = /W3S/gi;
let result_5 = pattern_5.multiline;

console.log('result_5', result_5);
//: false

// Description:
	// The "m" modifier specifies a multiline match.
	// It only affects the behavior of start ^ and end $.
	// ^ specifies a match at the start of a string.
	// $ specifies a match at the end of a string.
	// With the "m" set, ^ and $ also match at the beginning and end of each line.
					
// Syntax:
	// new RegExp("regexp", "m")
	// or simply:
	// /regexp/m

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// // History:
// /regexp/m is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers:
