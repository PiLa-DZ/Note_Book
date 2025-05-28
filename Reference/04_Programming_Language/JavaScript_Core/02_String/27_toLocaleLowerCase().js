// Convert to lowercase:
let str = "Hello World!";

let result = str.toLocaleLowerCase();

console.log(result);
//: hello world!

// Description:
// The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.
// The locale is based on the language settings of the browser.
// The toLocaleLowerCase() method does not change the original string.
// The toLocaleLowerCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

// See Also:
// The toLowerCase() Method
// The toUpperCase() Method
// The toLocaleUpperCase() Method

// Syntax:
// string.toLocaleLowerCase()

// Parameters:
// NONE

// Return:
// A string	A new string converted to lowercase according to current locale.

// History:
// toLocaleLowerCase() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

