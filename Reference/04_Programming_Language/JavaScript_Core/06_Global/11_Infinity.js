// Example 1
// Display a number that exceeds the positive infinity:
let x = 1.797693134862315E+308;
let y = x * 1.001;
console.log('y', y);
//: Infinity

// Example 2
// Display a number that exceeds the negative infinity:
let a = -1.797693134862316E+308;
let b = a * 1.001;
console.log('b', b);
//: -Infinity

// Description:
// Infinity is a number that represents positive infinity.
// -Infinity represents negative infinity.
// A number reaches Infinity when it exceeds the upper limit for a number:
// 1.797693134862315E+308.
// A number reaches -Infinity when it exceeds the lower limit for a number:
// -1.797693134862316E+308.

// See Also:
// The global isFinite() Method
// The Number.isFinite() Method

// Syntax:
// Infinity

// Return:
// Infinity

// History:
// infinity() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
