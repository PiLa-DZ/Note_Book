// Examples:
let x = Math.expm1(3);
console.log('x',x);
//: 19.085536923187668

let a = Math.exp(1);
console.log('a',a);
//: 2.718281828459045

let b = Math.exp(-1);
console.log('b',b);
//: 0.36787944117144233

let c = Math.exp(5);
console.log('c',c);
//: 148.4131591025766

let d = Math.exp(10);
console.log('d',d);
//: 22026.465794806718

// Description:
// The expm1() method returns the value of Ex minus 1, where E is Euler's number (approximately 2.7183) and x is the number passed to it.
// This method is more accurate than using Math.exp() and subtracting 1.

// JavaScript Logarthmic Functions:
// The Math.log() Method
// The Math.log2() Method
// The Math.log10() Method
// The Math.log1p() Method

// Logarthmic Properies:
// The Math.LN2 Property
// The Math.LN10 Property
// The Math.LOG2E Property
// The Math.LOG10E Property

// Exponential Functions:
// The Math.E Property (Euler's Number)
// The Math.exp() Method
// The Math.expm1() Method

// Syntax:
// Math.expm1(x)

// Parameters:
// x 	Required.  // A number.

// Return:
// Number	Ex minus 1

// History:
// Math.expm1() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
