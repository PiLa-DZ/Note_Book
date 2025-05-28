// Convert different values to strings:
let a = String(new Date());
console.log('a', a);
//: Sat Oct 19 2024 22:41:44 GMT+0100 (Central European Standard Time)

let b = String("12345");
console.log('b', b);
//: 12345

let c = String(12345);
console.log('c', c);
//: 12345

// Description:
// The String() method converts a value to a string.

// Note:
// The String() method returns the same as the toString() method for any value.

// Syntax:
// String(value)

// Parameters:
	// value 	Required.
		// A JavaScript value.
// Return:
// A string.	The value converted to a string.

// History:
// String() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
