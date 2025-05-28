// Convert to uppercase:
let str = "Hello World!";

let result = str.toLocaleUpperCase();

console.log(result);
//: HELLO WORLD!

// Description:
// The toLocaleUpperCase() method converts a string to uppercase letters, using current locale.
// The locale is based on the language settings of the browser.
// The toLocaleUpperCase() method does not change the original string.
// The toLocaleUpperCase() returns the same result as toUpperCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

// See Also:
// The toUpperCase() Method
// The toLowerCase() Method
// The toLocaleLowerCase() Method

// Syntax:
// string.toLocaleUpperCase()

// Parameters:
// NONE

// Return:
// A string.	A new string converted to uppercase according to current locale.

// History:
// toLocalUpperCase() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

