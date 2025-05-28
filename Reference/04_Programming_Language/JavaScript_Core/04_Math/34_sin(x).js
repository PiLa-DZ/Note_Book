// Examples:
let a = Math.sin(3.14);
console.log('a',a);
//: 0.0015926529164868282

let b = Math.sin(0);
console.log('b',b);
//: 0

let c = Math.sin(Math.PI/6);
console.log('c',c);
//: 0.49999999999999994

let d = Math.sin(Math.PI/2);
console.log('d',d);
//: 1

let e = Math.sin(Math.PI);
console.log('e',e);
//: 1.2246467991473532e-16

// Math.sin(x) expect x in radians.
// To use degrees, convert degrees to radians first.
let degrees = 1;
let radians = degrees * Math.PI/180;
let f = Math.sin(radians);
console.log('f',f);
//: 0.01745240643728351

// Description:
// The Math.sin() method returns the sine of a number.
// The Math.sin() method returns a number between -1 and 1.
// The Math.sin() method expects the number in radians.

// What is Radians?:
// Radians is an angle's α amount of rotation b on a circle:
// IMAGE --> Radian
// Degrees	PI	    Radians
	// 0°	0	    0
	// 1°	PI/180	0.0175
	// 30°	PI/6	0.52
	// 45°	PI/4	0.79
	// 90°	PI/2	1.57
	// 180°	PI	    3.14
	// 360°	PI*2	6.28

// JavaScript Sine and Cosine Methods:
// The Math.sin() Method
// The Math.sinh() Method
// The Math.asin() Method
// The Math.asinh() Method
// The Math.cos() Method
// The Math.cosh() Method
// The Math.acos() Method
// The Math.acosh() Method

// Syntax:
// Math.sin(x)

// Parameters:
// x 	Required.  // A number representing radians.

// Return:
	// Number 	-1 to 1. The sine of the number.
		// NaN if the parameter is not numeric.

// The Pythagoran Therorem:
// Math.sin(), Math.cos(), and Math.tan() are related to the Pythagorean theorem:
// IMAGE --> Pythagoras
// Theorem: c2 = a2 + b2
// The sine Math.sin() to the angle is a / c.
// The cosine Math.cos() to the angle is b / c.
// The tangent Math.tan() to the angle is a / b.

// History:
// Math.sin() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
