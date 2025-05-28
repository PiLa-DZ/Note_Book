// Get the month, according to universal time:
let a = new Date();
let b = a.getUTCMonth();
console.log('b', b);
//: 9


// Get the name of the month (not just a number):
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let c = new Date()
let d = month[c.getUTCMonth()]; 
console.log('d', d);
//: October


// Description:
// getUTCMonth() returns the month (0 to 11) of a date.
// getUTCMonth() returns the month according to UTC.
// January = 0, February = 1, ... (See below):

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCMonth()

// Parameters:
// NONE

// Return:
// A number	The month of the date (0 to 11).

// History:
// getUTCMonth() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
