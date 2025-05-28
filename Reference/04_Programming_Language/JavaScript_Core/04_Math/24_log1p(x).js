// Examples:
let a = Math.log1p(2.7183);
console.log('a',a);
//: 1.3132665745863341

let b = Math.log1p(2);
console.log('b',b);
//: 1.0986122886681096

let c = Math.log1p(1);
console.log('c',c);
//: 0.6931471805599453

let d = Math.log1p(0);
console.log('d',d);
//: 0

let e = Math.log1p(-1);
console.log('e',e);
//: -Infinity

// Description:
// The Math.log1p() method returns the natural logarithm (base E) of 1 + a number.

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
// Math.log1p(x)

// Parameters:
// x 	Required.  // A number.

// Return:
	// Number	The natural logarithm (base E) of 1 + the number.
		// NaN if the number is less than -1.
		// -Infinity if the number is -1.

// History:
// Math.log1p() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:
