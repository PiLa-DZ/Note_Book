// Check if a value is NaN:
let a = isNaN(123);
console.log('a', a);
//: false

let b = isNaN(-1.23);
console.log('b', b);
//: false

let c = isNaN(5-2);
console.log('c', c);
//: false

let d = isNaN(0);
console.log('d', d);
//: false

let e = isNaN('123');
console.log('e', e);
//: false

let f = isNaN('Hello');
console.log('f', f);
//: true

let g = isNaN('2005/12/12');
console.log('g', g);
//: true

// Description:
// In JavaScript NaN is short for "Not-a-Number".
// The isNaN() method returns true if a value is NaN.
// The isNaN() method converts the value to a number before testing it.

// See Also:
// The Number.isNaN() Method
// The global NaN Property
// The global isFinite() Method
// The global Infinity Property

// Difference Between isnan() and Number.isnan():
// isNaN() method returns true if a value is Not-a-Number.
// Number.isNaN() returns true if a number is Not-a-Number.

// In other words:
// isNaN() converts the value to a number before testing it.

// Examples:
	// // This returns true;
	// isNaN('Hello');
	// // This returns false;
	// Number.isNaN('Hello');

// Syntax:
// isNaN(value)

// Parameters:
	// value 	Required.
		// The value to be tested.

// Return:
// A boolean	true if the value is NaN, otherwise false.

// More Examples
	// Check if a value is NaN:
	// isNaN(0/0);
	// isNaN('');
	// isNaN('A');
	// isNaN(true);
	// isNaN(false);
	// isNaN('NaN');
	// isNaN(NaN);
	// isNaN(undefined);
	// isNaN(null);
	// Browser Support

// History:
// isNaN() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
