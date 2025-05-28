// Example 1 ==========================================================
// A global search for "Is" at the beginning of a string:
let text_1 = "Is this his";
let pattern_1 = /^Is/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'Is' ]

// Example 2 ==========================================================
// A global, case-insensitive, multiline search for "is" at the beginning of each line:
let text_2 = `Is this
all there
is`

let pattern_2 = /^is/gmi;
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ 'Is', 'is' ]

// Description:
	// The ^n quantifier matches any string with n at the beginning of it.
	// Tip: Use the n$ quantifier to match any string with n at the END of it.

// Syntax:
	// new RegExp("^n")
	// or
	// /^n/
// Syntax with modifiers
	// new RegExp("^n", "g")
	// or simply:
	// /\^n/g

// History:
// /^n/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
