// Get the primitive value of a date object:
let d = new Date();
let ms = d.valueOf();
console.log('ms', ms);
//: 1729371559544

// Description:
// The valueOf() method returns the primitive value of a date object.
// Note: The primitive value is returned as the number of millisecond since midnight January 1, 1970 UTC.

// Syntax:
// Date.valueOf()

// Parameters:
// None

// Technical Details:
// Return Value: 	A Number, representing the number of milliseconds between the date object and midnight January 1, 1970 UTC
// JavaScript Version: 	ECMAScript 1

// History:
// valueOf() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
