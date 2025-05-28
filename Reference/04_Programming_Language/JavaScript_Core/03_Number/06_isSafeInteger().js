// Are these safe integers?
let n1 = Number.isSafeInteger(123);
console.log('n1', n1);
//: true

let n2 = Number.isSafeInteger(-123);
console.log('n2', n2);
//: true

let n3 = Number.isSafeInteger('123');
console.log('n3', n3);
//: false

let n4 = Number.isSafeInteger(5-2);
console.log('n4', n4);
//: true

let n5 = Number.isSafeInteger(0);
console.log('n5', n5);
//: true

let n6 = Number.isSafeInteger(0.5);
console.log('n6', n6);
//: false

let n7 = Number.isSafeInteger(0/0);
console.log('n7', n7);
//: false

// Description:
// The Number.isSafeInteger() method returns trueif a number is a safe integer.
// Otherwise it returns false.
// What is a JavaScript Safe Integer?
// A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number: all integers from (253 - 1) to -(253 - 1).

// See Also:
// The Number.isInteger() Method
// The MAX_SAFE_INTEGER Property
// The MIN_SAFE_INTEGER Property

// Syntax:
// Number.isSafeInteger(value)

// Parameters:
// value 	Required.  // The value to be tested.

// Return:
// A boolean	true if the value is a safe integer, otherwise false.

// More Examples
	// Are these safe integers?
	// Number.isSafeInteger(Math.pow(2, 53));
	// Number.isSafeInteger(Math.pow(2, 53) - 1);
	// Number.isSafeInteger(true);
	// Number.isSafeInteger(false);
	// Number.isSafeInteger(Infinity);
	// Number.isSafeInteger(-Infinity);

// History:
// Number.isSafeInteger() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
