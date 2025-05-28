// Examples:
let x = Math.round(2.5);
console.log('x',x);
//: 3

let a = Math.round(2.60);
console.log('a',a);
//: 3

let b = Math.round(2.50);
console.log('b',b);
//: 3

let c = Math.round(2.49);
console.log('c',c);
//: 2

let d = Math.round(-2.60);
console.log('d',d);
//: -3

let e = Math.round(-2.50);
console.log('e',e);
//: -2

let f = Math.round(-2.49);
console.log('f',f);
//: -2

// Description:
// The Math.round() method rounds a number to the nearest integer.
// 2.49 will be rounded down (2), and 2.5 will be rounded up (3).

// JavaScript Rounding Functions:
// The Math.abs() Method
// The Math.ceil() Method
// The Math.floor() Method
// The Math.round() Method
// The Math.fround() Method
// The Math.trunc() Method

// Syntax:
// Math.round(x)

// Parameters:
// x 	Required.  // A number.

// Return:
	// Number	The number rounded to the nearest integer.

// History:
// Math.round() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
