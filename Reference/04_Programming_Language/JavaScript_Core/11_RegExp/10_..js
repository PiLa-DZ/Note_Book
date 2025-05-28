// A global search for any character between h and t:
let text_1 = "That's hot!";
let pattern_1 = /h.t/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'hat', 'hot' ]

// Description:
	// The . metacharacter matches any character, except newline or other line terminators.

// Syntax:
	// new RegExp("regexp.")
	// or simply:
	// /regexp./
// Syntax with modifiers
	// new RegExp("regexp.", "g")
	// or simply:
	// /regexp./g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /./ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
