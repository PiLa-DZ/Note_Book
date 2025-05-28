// Example 1
// Remove spaces with trim():
let str_1 = "       Hello World!        ";
let result_1 = str_1.trim();
console.log(result_1);
//: Hello World!

// Example 2
// Remove spaces with replace() using a regular expression:
let str_2 = "       Hello World!        ";
let result_2 = str_2.replace(/^\s+|\s+$/gm,'');
console.log(result_2);
//: Hello World!

// Description:
// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string.

// See Also:
// The trimEnd() Method
// The trimStart() Method
// The padEnd() Method
// The padStart() Method

// Syntax:
// string.trim()

// Parameters:
// NONE

// Return:
// A string	A string with removed whitespace from both ends.

// Hisory:
// trim() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013

