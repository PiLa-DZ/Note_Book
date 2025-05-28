// Example 1 ==========================
// Get the first character in a string:
let str_1 = 'abcdefg';

let result_1 = str_1.charAt(0);

console.log(result_1);
//: a

// Example 2 ==========================
// Get the first character in a string:
let str_2 = 'abcdefg';

let result_2 = str_2.charAt(1);

console.log(result_2);
//: b

// Example 3 ==========================
// Get the last character in a string:
let str_3 = 'abcdefg';

let result_3 = str_3.charAt(str_3.length - 1);

console.log(result_3);
//: g

// Description:
// The charAt() method returns the character at a specified index (position) in a string.
// The index of the first character is 0, the second 1, ...

// See Also:
// The charCodeAt() Method
// The codePointAt() Method
// The indexOf() Method
// The lastIndexOf() Method

// Syntax:
// string.charAt(index)

// Parameters:
// index	Optional.  // The index (position) of the character.  // Default = 0.

// Return:
// String	The character at the specified index.
// Empty string ("") if the index is out of range.

// History:
// charAt() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

