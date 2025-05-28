// Example 1
// Check if a number is finite:
let a = isFinite(123);
console.log('a', a);
//: true

// Example 2
let b = isFinite("123");
console.log('b', b);
//: true

// Example 3
// This returns true
let c = isFinite(123)
console.log('c', c);
//: true

// Example 4
// This returns false
let d = Number.isFinite("123")
console.log('d', d);
//: false

// Description:
// The isFinite() method returns true if a value is a finite number.
// Infinite (not finite) values are Infinity, -Infinity, or NaN

// See Also:
// The Number.isFinite() Method
// The Global Infinity Property
// The Global NaN Property
// The Global isNaN() Method

// Difference Between isFinite() and Number.isFinite():
// isFinite() returns true if a value is a finite number.
// Number.isFinite() returns true if a number is a finite number.

// In other words:
// isFinite() converts the value to a number before testing it.

// Syntax:
// isFinite(value)

// Parameters:
// value 	Required.
// The value to be tested.

// Return:
// A boolean.	false if the value is Infinity, -Infinity, or NaN.
// Otherwise true.

// History:
// isFinite() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
