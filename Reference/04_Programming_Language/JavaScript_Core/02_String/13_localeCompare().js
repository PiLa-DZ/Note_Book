// Example 1 ==========================
// Compare "ab" with "cd":
let str1 = "ab";
let str2 = "cd";
let result1 = str1.localeCompare(str2);
console.log(result1);
//: -1

// Example 2 ==========================
// Compare "cd" with "ab":
let str3 = "cd";
let str4 = "ab";
let result2 = str3.localeCompare(str4);
console.log(result2);
//: 1

// Example 3 ==========================
// Compare "ab" with "ab":
let str5 = "ab";
let str6 = "ab";
let result3 = str5.localeCompare(str6);
console.log(result3);
//: 0

// Description:
// The localeCompare() method compares two strings in the current locale.
// The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
// The current locale is based on the language settings of the browser.

// Syntax:
// string.localeCompare(compareString)

// Parameters:
// compareString	Required.  // The string to compare with.

// Return:
// A number	One of 3 values:
// -1 if the string is sorted before the compareString
// 0 if the two strings are equal
// 1 if the string is sorted after the compareString

// History:
// localeCompare() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

