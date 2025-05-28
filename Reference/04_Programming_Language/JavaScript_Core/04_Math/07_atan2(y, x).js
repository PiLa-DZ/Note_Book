// Example - atan2(y,x)
// Assume you had a point with the (x,y) coordinates of (4,8), you could calculate the angle in radians between that point and the positive X axis as follows:
let a = Math.atan2(8, 4);
console.log('a',a);
//: 1.1071487177940904

// Description:
// The Math.atan2() method returns the arctangent of the quotient of its arguments, as a numeric value between PI and -PI radians.
// The number returned represents the counterclockwise angle in radians (not degrees) between the positive X axis and the point (x, y).
// Note: With atan2(), the y coordinate is passed as the first argument and the x coordinate is passed as the second argument.

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
// Math.atan2(y, x)

// Parameters:
// y 	Required.  // The y coordinate.
// x 	Required.  // The x coordinate.

// Return:
	// Number	PI to -PI.
	// NaN if the values are empty or not numeric.

// History:
// Math.atan2() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
