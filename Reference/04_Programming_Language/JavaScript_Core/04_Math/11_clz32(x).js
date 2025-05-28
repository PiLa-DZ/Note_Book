// Example:
let a = Math.clz32(0);
console.log('a',a);
//: 32

let b = Math.clz32(1);
console.log('b',b);
//: 31

let c = Math.clz32(2);
console.log('c',c);
//: 30

let d = Math.clz32(4); 
console.log('d',d);
//: 29

// Description:
// The Math.clz32() method returns the number of leading zeros in a 32-bit binary number.
// clz32 is short for CountLeadingZeroes32.

// Syntax:
// Math.clz32(x)

// Parameters:
// x 	Required.  // A number.

// Return:
	// Number	Number of leading zeros in the 32-bit binary representation of a number.
		// If the number is 0, it returns 32 (all bits are 0).

// History:
// Math.clz32() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
