// Example 1 ==========================================================
// A search for "is" at the end of a string:
let text_1 = "Is this his";
let pattern_1 = /is$/;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'is', index: 9, input: 'Is this his', groups: undefined ]

// Example 2 ==========================================================
// A global, multiline search for "is" at the end of each line:
let text_2 = `Is this
all there
is`

let pattern_2 = /is$/gm;
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ 'is', 'is' ]

// Description:
	// The n$ quantifier matches any string with n at the end of it.
	// Tip: Use the ^n quantifier to match any string with n at the BEGINNING of it.

// Syntax:
	// new RegExp("n$")
	// or
	// /n$/
// Syntax with modifiers
	// new RegExp("n$", "g")
	// or simply:
	// /n$/g

// History:
// /n$/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
