// Examples
let n1 = Number.parseFloat(10);
console.log('n1', n1);
//: 10

let n2 = Number.parseFloat("10");
console.log('n2', n2);
//: 10

let n3 = Number.parseFloat("10.33");
console.log('n3', n3);
//: 10.33

let n4 = Number.parseFloat("34 45 66");
console.log('n4', n4);
//: 34

let n5 = Number.parseFloat("He was 40");
console.log('n5', n5);
//: NaN

let n6 = Number.parseFloat("40.00");
console.log('n6', n6);
//: 40

let n7 = Number.parseFloat(" 40 ");
console.log('n7', n7);
//: 40

let n8 = Number.parseFloat("40 years");
console.log('n8', n8);
//: 40

let n9 = Number.parseFloat("40H")
console.log('n9', n9);
//: 40

let n10 = Number.parseFloat("H40");
console.log('n10', n10);
//: NaN

// Description:
// The Number.parseFloat() method parses a value as a string and returns the first number.

// Notes:
// If the first character cannot be converted, NaN is returned.
// Leading and trailing spaces are ignored.
// Only the first number found is returned.

// Syntax:
// Number.parseFloat(value)

// Parameters:
// value 	Required.  // The value to parse.

// Return:
// Number	NaN if no number is found.

// History:
// Number.parseFloat() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
