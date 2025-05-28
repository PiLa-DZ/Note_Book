// Examples:
let a = Math.tan(1);
console.log('a',a);
//: 1.5574077246549023

let b = Math.tan(0);
console.log('b',b);
//: 0

let c = Math.tan(Math.PI);
console.log('c',c);
//: -1.2246467991473532e-16

// Math.tan(x) expect x in radians.
// To use degrees, convert degrees to radians first.
let degrees = 1;
let radians = degrees * Math.PI/180;
let d       = Math.tan(radians);
console.log('d',d);
//: 0.017455064928217585

// Description:
// The Math.tan() method returns the tangent of a number.
// The Math.tan() method expects the number in radians.
// Based on sine and cosine:
// Math.tan(x) = Math.sin(x) / Math.cos(x).

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

// JavaScript Tangent Methods:
// The Math.tan() Method
// The Math.tanh() Method
// The Math.atan() Method
// The Math.atan2() Method
// The Math.atanh() Method
// Sine and Cosine Methods:
// The Math.sin() Method
// The Math.cos() Method

// Syntax:
// Math.tan(x)

// Parameters:
// x 	Required.  // A number representing radians.

// Return:
	// Number	The tangent of the number.
	// NaN if the number is empty or not numeric.

// The Pythagoran Therorem:
// Math.sin(), Math.cos(), and Math.tan() are related to the Pythagorean theorem:
// IMAGE --> Pythagoras
// Theorem: c2 = a2 + b2
// The sine Math.sin() to the angle is a / c.
// The cosine Math.cos() to the angle is b / c.
// The tangent Math.tan() to the angle is a / b.

// History:
// Math.tan() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
