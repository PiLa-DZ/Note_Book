// Get the UTC day:
let a = new Date();
let b = a.getUTCDate();
console.log('b', b);
//: 19

// Get the UTC day of the month from a specific, local date-time:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getUTCDate();
console.log('d', d);
//: 21

// Description:
// getUTCDate() returns the day of the month (1 to 31) of a date object.
// getUTCDate() returns the day according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCDate()

// Parameters:
// NONE

// Return:
// A number	The day of the month (1 to 31) of a date, according to UTC.

// History:
// getUTCDate() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
