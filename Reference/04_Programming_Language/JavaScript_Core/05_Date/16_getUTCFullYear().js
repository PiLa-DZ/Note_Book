let a = new Date();
let b = a.getUTCFullYear();
console.log('b', b);
//: 2024


// Get the full UTC year from a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getUTCFullYear();
console.log('d', d);
//: 1983

// Description:
// getUTCFullYear() returns the year of a date.
// getUTCFullYear() returns the year according to UTC.
// getUTCFullYear() returns four digits for years between 1000 and 9999.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCFullYear()

// Parameters:
// NONE

// Return:
// A number	The year of the date.

// History:
// getUTCFullYear() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
