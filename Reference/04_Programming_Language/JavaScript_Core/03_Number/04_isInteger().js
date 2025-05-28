// Are these integers?
let n1 = Number.isInteger(123);
console.log('n1', n1);
//: true

let n2 = Number.isInteger(-123);
console.log('n2', n2);
//: true

let n3 = Number.isInteger('123');
console.log('n3', n3);
//: false

let n4 = Number.isInteger(4-2);
console.log('n4', n4);
//: true

let n5 = Number.isInteger(4/2);
console.log('n5', n5);
//: true

let n6 = Number.isInteger(5-2);
console.log('n6', n6);
//: true

let n7 = Number.isInteger(5/2);
console.log('n7', n7);
//: false

// Description:
// The Number.isInteger() method returns true if a value is an integer of the datatype Number.
// Otherwise it returns false.

// See Also:
// The Number.isSafeInteger() Method
// The MAX_SAFE_INTEGER Property
// The MIN_SAFE_INTEGER Property

// Syntax:
// Number.isInteger(value)

// Parameters:
// value	Required.  // The value to be tested.

// Return:
// A boolean	true if the value is an integer of the datatype Number.
// Otherwise false.

// More Examples
	// Are these integers?
	// Number.isInteger(0);
	// Number.isInteger(0/0);
	// Number.isInteger(0.5);
	// Number.isInteger(false);
	// Number.isInteger(NaN);
	// Number.isInteger(Infinity);
	// Number.isInteger(-Infinity);

// History:
// Number.isInteger() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017:

