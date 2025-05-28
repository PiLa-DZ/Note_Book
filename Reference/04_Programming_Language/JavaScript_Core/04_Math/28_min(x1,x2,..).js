// Example:
let x = Math.min(5, 10);
console.log('x',x);
//: 5

let a = Math.min(5, 10);
console.log('a',a);
//: 5

let b = Math.min(0, 150, 30, 20, 38);
console.log('b',b);
//: 0

let c = Math.min(-5, 10);
console.log('c',c);
//: -5

let d = Math.min(-5, -10);
console.log('d',d);
//: -10

let e = Math.min(1.5, 2.5);
console.log('e',e);
//: 1.5

// Description:
// The Math.min() method returns the number with the lowest value.

// See Also:
// The Math.max() Method

// Syntax:
// Math.min(n1, n2,...)

// Parameters:
// n1, n2,... 	Optional.  // One or more numbers to compare.

// Return:
	// Number	The lowest number of the arguments.
		// Infinity if no arguments are given.
		// NaN if one of the arguments is not a number.

// History:
// Math.min() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
