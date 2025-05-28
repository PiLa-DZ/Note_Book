// Get the UTC milliseconds:
let a = new Date();
let b = a.getUTCMilliseconds();
console.log('b', b);
//: 687


// Get the UTC milliseconds from a specific date:
let c = new Date("July 21, 1983 01:15:00.250");
let d = c.getUTCMilliseconds(); 
console.log('d', d);
//: 250

// Description:
// getUTCMilliseconds() returns the milliseconds (0 to 999) of a date.
// getUTCMilliseconds() returns the milliseconds according to UTC.

// Notes
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCMilliseconds()

// Parameters:
// NONE

// Return:
// A number	The milliseconds of the date (0 to 999).

// History:
// getUTCMilliseconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
