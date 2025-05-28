// Example 1 ==========================================================
// Do a global search for at least one "o":
let text_1 = "Hellooo World! Hello W3Schools!"; 
let pattern_1 = /o+/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'ooo', 'o', 'o', 'oo' ]

// Example 2 ==========================================================
// Do a global search for at least one word character:
let text_2 = "Hellooo World! Hello W3Schools!"; 
let pattern_2 = /\w+/g;
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ 'Hellooo', 'World', 'Hello', 'W3Schools' ]

// Description:
// The n+ quantifier matches any string that contains at least one n.

// Syntax:
	// new RegExp("n+")
	// or simply:
	// /n+/
// Syntax with modifiers
	// new RegExp("n+", "g")
	// or simply:
	// /n+/g

// History:
// /n+/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
