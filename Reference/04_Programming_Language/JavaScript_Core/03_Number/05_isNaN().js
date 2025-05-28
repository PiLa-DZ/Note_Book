// Check if a value is Number.NaN:
let n1 = Number.isNaN(123);
console.log('n1', n1);
//: false

let n2 = Number.isNaN(-1.23);
console.log('n2', n2);
//: false

let n3 = Number.isNaN('123');
console.log('n3', n3);
//: false

let n4 = Number.isNaN(0/0);
console.log('n4', n4);
//: true

let n5 = Number.isNaN(5-2);
console.log('n5', n5);
//: false

let n6 = Number.isNaN(0);
console.log('n6', n6);
//: false

let n7 = Number.isNaN('Hello');
console.log('n7', n7);
//: false

let n8 = Number.isNaN('2005/12/12');
console.log('n8', n8);
//: false

let n9 = Number.isNaN(' ');
console.log('n9', n9);
//: false

// Description:
// In JavaScript, NaN is short for "Not-a-Number".
// In JavaScript, NaN is a number that is not a legal number.
// The Number.isNaN() method returns true if the value is NaN, and the type is a Number.

// See Also:
// The NaN() Property
// The Global isNaN() Method

// Difference Between isnan() and Number.isnan():
// isNaN() method returns true if a value is Not-a-Number.
// Number.isNaN() returns true if a number is Not-a-Number.
// In other words:
// isNaN() converts the value to a number before testing it.
// Examples
	// This returns true;
	// isNaN('Hello');

	// This returns false;
	// Number.isNaN('Hello');

// Syntax:
// Number.isNaN(value)

// Parameters:
// value 	Required.  // The value to be tested.

// Return:
// A boolean.	true if the value is Number.NaN, otherwise false.

// More Examples
	// Check if a value is Number.NaN:
	// Number.isNaN(false);
	// Number.isNaN(true);
	// Number.isNaN(undefined);
	// Number.isNaN('NaN');
	// Number.isNaN(NaN);

// History:
// Number.isNaN() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
