// Example:
let a = Math.fround(2.60);
console.log('a',a);
//: 2.5999999046325684

let b = Math.fround(2.50);
console.log('b',b);
//: 2.5

let c = Math.fround(2.49);
console.log('c',c);
//: 2.490000009536743

let d = Math.fround(-2.60);
console.log('d',d);
//: -2.5999999046325684

let e = Math.fround(-2.50);
console.log('e',e);
//: -2.5

let f = Math.fround(-2.49);
console.log('f',f);
//: -2.490000009536743

// Description:
// The Math.fround() method returns the nearest 32-bit single precision float representation of a number.

// JavaScript Rounding Functions:
// The Math.abs() Method
// The Math.ceil() Method
// The Math.floor() Method
// The Math.round() Method
// The Math.fround() Method
// The Math.trunc() Method

// Syntax:
// Math.fround(x)

// Parameters:
// x 	Required.  // A number.

// Return:
// Number	The nearest 32-bit single precision float representation of the number.

// History:
// Math.fround() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
