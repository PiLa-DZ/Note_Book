// Get the milliseconds:
let a = new Date();
let b = a.getMilliseconds();
console.log('b', b);
//: 435


// Get the milliseconds of a specific date:
let c = new Date("July 21, 1983 01:15:00.250");
let d = c.getMilliseconds();
console.log('d', d);
//: 250


// Description:
// getMilliseconds() returns the milliseconds (0 to 999) of a date.

// Syntax:
// Date.getMilliseconds()

// Parameters:
// NONE

// Return:
// A number	The milliseconds of the date (0 to 999).

// History:
// getMilliseconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
