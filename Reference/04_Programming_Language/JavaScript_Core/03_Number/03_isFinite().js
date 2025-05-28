// Example 1
// Is 123 finite?
let num = Number.isFinite(123)
let str = Number.isFinite('123')

console.log(num);
//: true

console.log(str);
//: false

// Description:
// The Number.isFinite() method returns true if a number is a finite number.
// Infinite (not finite) numbers are Infinity, -Infinity, or NaN
// Otherwise it returns false.

// See Also:
// The Global isFinite() Method
// The Global isNaN() Method
// The Number.isNaN() Method
// The POSITIVE_INFINITY Property
// The NEGATIVE_INFINITY Property

// Difference Between isFinite() and Number.isFinite():
// isFinite() returns true if a value is a finite number.
// Number.isFinite() returns true if a number is a finite number.
// In other words:
// isFinite() converts the value to a number before testing it.
// Examples
	// This returns true
	// isFinite(123)

	// This returns false
	// Number.isFinite("123")

// Syntax:
// Number.isFinite(value)

// Parameters:
// value 	Required.  // The value to be tested.

// Return:
// A boolean	true if the value is a finite Number, otherwise false.

// History:
// Number.isFinite() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
