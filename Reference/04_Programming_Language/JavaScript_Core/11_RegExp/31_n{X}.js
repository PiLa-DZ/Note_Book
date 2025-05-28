// A global search for a substring that contains a sequence of four digits:
let text = "100, 1000 or 10000?";
let pattern = /\d{4}/g;
let result = text.match(pattern);

console.log('result', result);
//: [ '1000', '1000' ]

// Description:
	// The n{X} quantifier matches any string that contains a sequence of X n's.
	// X must be a number.

// Syntax:
	// new RegExp("n{X}")
	// or simply:
	// /n{X}/
// Syntax with modifiers
	// new RegExp("n{X}", "g")
	// or simply:
	// /n{X}/g

// History:
// /n{X}/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
