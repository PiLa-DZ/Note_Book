// Get the UTC minutes:
let a = new Date();
let b = a.getUTCMinutes();
console.log('b', b);
//: 6


// Get the UTC minutes from a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getUTCMinutes();
console.log('d', d);
//: 15

// Description:
// getUTCMinutes() returns the minutes (0 to 59) of a date.
// getUTCMinutes() returns the minutes according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCMinutes()

// Parameters:
// NONE

// Return:
// A number	The minutes of a date (0 to 59).

// History:
// getUTCMinutes() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
