// Get code point value at the first position in a string:
let str = 'abcdefg';

let result = str.codePointAt(0);

console.log(result);
//: 97

// Description:
// The codePointAt() method returns the Unicode value at an index (position) in a string.
// The index of the first position is 0, the second is 1, ....

// See Also:
// The charCodeAt() Method
// The charAt() Method
// The indexOf() Method
// The lastIndexOf() Method
// Unicode
// For more information about Unicode Character Sets, visit our Unicode Reference.

// Difference Between charCodeAt() and codePointAt():
// charCodeAt() is UTF-16, codePointAt() is Unicode.
// charCodeAt() returns a number between 0 and 65535.
// Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).
// For more information about Unicode Character Sets, visit our Unicode Reference.

// Syntax:
// string.codePointAt(index)

// Parameters:
// index	Optional.  // The index (position) in a the string.  // Default value = 0.

// Return:
// Number	The code point value at the specified index.
// undefined if the index is invalid.

// History:
// codePointAt() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017

