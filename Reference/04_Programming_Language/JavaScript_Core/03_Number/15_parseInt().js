let n1 = Number.parseInt("10");
console.log('n1', n1);
//: 10

let n2 = Number.parseInt("10.00");
console.log('n2', n2);
//: 10

let n3 = Number.parseInt("10.33");
console.log('n3', n3);
//: 10

let n4 = Number.parseInt("34 45 66");
console.log('n4', n4);
//: 34

let n5 = Number.parseInt(" 60 ");
console.log('n5', n5);
//: 60

let n6 = Number.parseInt("40 years");
console.log('n6', n6);
//: 40

let n7 = Number.parseInt("He was 40");
console.log('n7', n7);
//: NaN

let n8 = Number.parseInt("10", 10);
console.log('n8', n8);
//: 10

let n9 = Number.parseInt("010");
console.log('n9', n9);
//: 10

let n10 = Number.parseInt("10", 8);
console.log('n10', n10);
//: 8

let n11 = Number.parseInt("0x10");
console.log('n11', n11);
//: 16

let n12 = Number.parseInt("10", 16);
console.log('n12', n12);
//: 16

// Description:
// The Number.parseInt method parses a value as a string and returns the first integer.
// A radix parameter specifies the number system to use:
// 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
// If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.

// Notes:
// If the first character cannot be converted, NaN is returned.
// Leading and trailing spaces are ignored.
// Only the first integer found is returned.

// Syntax:
// Number.parseInt(string, radix)

// Parameters:
// value 	Required.  // The value to be parsed.
// radix 	Optional. Default is 10.  // A number (2 to 36) specifying the number system.

// Return:
// Number	NaN if no integer is found.

// History:
// Number.parseInt() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
