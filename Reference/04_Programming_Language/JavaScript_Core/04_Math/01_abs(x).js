// Examples
let a = Math.abs(-7.25);
console.log('a',a);
//: 7.25

let b = Math.abs(7.25);
console.log('b',b);
//: 7.25

let c = Math.abs(-7.25);
console.log('c',c);
//: 7.25

let d = Math.abs(null);
console.log('d',d);
//: 0

let e = Math.abs("Hello");
console.log('e',e);
//: NaN

let f = Math.abs(2-3);
console.log('f',f);
//: 1

// Description:
// The Math.abs() method returns the absolute value of a number.

// JavaScript Rounding Functions:
// The Math.abs() Method
// The Math.ceil() Method
// The Math.floor() Method
// The Math.round() Method
// The Math.fround() Method
// The Math.trunc() Method

// Syntax:
// Math.abs(x)

// Parameters:
// x 	Required.  // A number.

// Return:
	// Number	The absolute value of the number.
		// NaN if the value is not a number.
		// 0 if the value is null.

// History:
// Math.abs() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
