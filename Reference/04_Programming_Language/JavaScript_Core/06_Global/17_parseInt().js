// Parse different values:
let a = parseInt("10");
console.log('a', a);
//: 10

let b = parseInt("10.00");
console.log('b', b);
//: 10

let c = parseInt("10.33");
console.log('c', c);
//: 10

let d = parseInt("34 45 66");
console.log('d', d);
//: 34

let e = parseInt(" 60 ");
console.log('e', e);
//: 60

let f = parseInt("40 years");
console.log('f', f);
//: 40

let g = parseInt("He was 40");
console.log('g', g);
//: NaN

// Description:
// The parseInt method parses a value as a string and returns the first integer.
// A radix parameter specifies the number system to use:
// 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
// If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.

// Notes:
// If the first character cannot be converted, NaN is returned.
// Leading and trailing spaces are ignored.
// Only the first integer found is returned.
// Older browsers will return 8 for parseInt("010"). Older versions of ECMAScript used octal (radix 8) for values beginning with "0". From ECMAScript 5 (2009) default is decimal (radix 10).

// Syntax:
// parseInt(string, radix)

// Parameters:
	// value 	Required.
		// The value to be parsed.
	// radix 	Optional. Default is 10.
		// A number (2 to 36) specifying the number system.

// Return:
	// A number.	NaN if no integer is found.

// History:
// parseInt() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
