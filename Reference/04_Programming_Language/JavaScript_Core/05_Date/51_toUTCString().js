// Get a date object as a string, according to UTC:
let d = new Date();
let text = d.toUTCString();
console.log('text', text);
//: Sat, 19 Oct 2024 20:54:21 GMT

// Description:
// The toUTCString() method returns a date object as a string, according to UTC.
// Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
// Note: UTC time is the same as GMT time.

// Syntax:
// Date.toUTCString()

// Parameters:
// None

// Technical Details:
// Return Value: 	A String, representing the UTC date and time as a string
// JavaScript Version: 	ECMAScript 1

// History:
// toUTCString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
