// Parse different values:
let a = parseFloat(10);
console.log('a', a);
//: 10

let b = parseFloat("10");
console.log('b', b);
//: 10

let c = parseFloat("10.33");
console.log('c', c);
//: 10.33

let d = parseFloat("34 45 66");
console.log('d', d);
//: 34

let e = parseFloat("He was 40");
console.log('e', e);
//: NaN

// Description:
// The parseFloat() method parses a value as a string and returns the first number.

// Notes:
// If the first character cannot be converted, NaN is returned.
// Leading and trailing spaces are ignored.
// Only the first number found is returned.

// Syntax:
// parseFloat(value)

// Parameters:
	// value 	Required.
	// The value to parse.

// Return:
// A number	NaN if no number is found.

// History:
// parseFloat() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
