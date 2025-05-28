let arr = ['a', 'b', 'c'];

// Convert an array to a string:
let str = arr.toString();

console.log(arr);
//: [ 'a', 'b', 'c' ]

console.log(str);
//: a,b,c

// Description:
// The toString() method returns a string with array values separated by commas.
// The toString() method does not change the original array.

// Note:
// Every JavaScript object has a toString() method.
// The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
// Normally, you will not use it in your own code.

// Syntax:
// array.toString()

// Parameters:
// NONE

// Return:
// A string	The array values separated by commas.

// History:
// toString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
