// Get the time portion of a date as a string, using locale conventions:
let d = new Date();
let text = d.toLocaleTimeString();
console.log('text', text);
//: 9:43:06 PM

// Description:
// The toLocaleTimeString() method returns the time portion of a date object as a string, using locale conventions.

// Syntax:
// Date.toLocaleTimeString()

// Technical Details:
// Return Value: 	A String, representing the time as a string
// JavaScript Version: 	ECMAScript 1

// History:
// toLocaleTimeString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
