// Convert booleans and dates to a number:
let a = Number(true);
console.log('a', a);
//: 1

// Convert booleans and dates to a number:
let b = Number(false);
console.log('b', b);
//: 0

// Convert booleans and dates to a number:
let c = Number(new Date());
console.log('c', c);
//: 1729373648758

// Convert different numbers to a number:
let d = Number(999);
console.log('d', d);
//: 999

// Convert different numbers to a number:
let e = Number("999");
console.log('e', e);
//: 999

// Convert different numbers to a number:
let f = Number("999 888");
console.log('f', f);
//: NaN

// Convert different arrays to a number:
let g = Number([9]);
console.log('g', g);
//: 9

// Convert different arrays to a number:
let h = Number([9.9]);
console.log('h', h);
//: 9.9

// Convert different arrays to a number:
let j = Number([9,9]);
console.log('j', j);
//: NaN

// Description:
// The Number() method converts a value to a number.
// If the value cannot be converted, NaN is returned.

// Notes:
// For booleans, Number() returns 0 or 1.
// For dates, Number() returns milliseconds since January 1, 1970 00:00:00.
// For strings, Number() returns a number or NaN.

// Syntax:
// Number(value)

// Parameters:
	// value 	Optional.
	// A JavaScript value (variable).

// Return:
	// A number	Returns the value as a number.
		// If the value cannot be converted to a number, NaN is returned.
		// If no value is provided, 0 is returned.

// History:
// Number() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
