// Get the weekday:
let a = new Date();
let b = a.getUTCDay();
console.log('b', b);
//: 6


// Get the name of the weekday (not just a number):
let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let c = new Date();
let d = weekday[c.getUTCDay()];
console.log('d', d);
//: Saturday

// Description:
// getUTCDay() returns the day of the week (0 to 6) of a date.
// getUTCDay() returns the day of the week according to universal time.
// Sunday = 0, Monday = 1, ... (See below):

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCDay()

// Parameters:
// NONE

// Return:
// A number	The weekday of a date (0 to 6), according to UTC.

// History:
// getUTCDay() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
