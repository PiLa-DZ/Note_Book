// Get the Unicode of the first character in a string:
let str = 'abcdefg';

let result = str.charCodeAt(0)

console.log(result);
//: 97

// Description:
// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
// The index of the first character is 0, the second is 1, ....
// The index of the last character is string length - 1 (See Examples below).
// See also the charAt() method.

// See Also:
// The charAt() Method
// The codePointAt() Method
// The indexOf() Method
// The lastIndexOf() Method

// charCodeAt() vs codePointAt():
// charCodeAt() is UTF-16, codePointAt() is Unicode.
// charCodeAt() returns a number between 0 and 65535.
// Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).
// For more information about Unicode Character Sets, visit our Unicode Reference.

// Syntax:
// string.charCodeAt(index)

// Parameters:
// index	Optional. A number.  // The index (position) of a character.  // Default value = 0.

// Return:
// A number	The Unicode of the character at the specified index.
// NaN if the index is invalid.

// History:
// charCodeAt() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

