// A global search for a substring that contains a sequence of three to four digits:
let text = "100, 1000 or 10000?";
let pattern = /\d{3,4}/g; 
let result = text.match(pattern);

console.log('result', result);
//: [ '100', '1000', '1000' ]

// Description:
	// The n{X,Y} quantifier matches any string that contains a sequence of X to Y n's.
	// X and Y must be a number.

// Syntax:
	// new RegExp("n{X,Y}")
	// or simply:
	// /n{X,Y}/
// Syntax with modifiers
	// new RegExp("n{X,Y}", "g")
	// or simply:
	// /n{X,Y}/g

// History:
// /n{X,Y}/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
