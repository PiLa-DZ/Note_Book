// Example 1
// How to convert Unicode values to characters:
let str_1 = String.fromCharCode(65);

console.log(str_1);
//: A

// Example 2
let str_2 = String.fromCharCode(72, 69, 76, 76, 79);

console.log(str_2);
//: HELLO

// Description:
// The String.fromCharCode() method converts Unicode values to characters.
// The String.fromCharCode() is a static method of the String object.
// The syntax is always String.fromCharCode().
// You cannot use myString.fromCharCode().

// Syntax:
// String.fromCharCode(n1, n2, ..., nX)

// Parameters:
// n1, n2, nX	Required.  // One or more Unicode values to be converted.

// Return:
// A string	A string representing the unicode character(s).

// History:
// String.fromCharCode() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

