// Get the UTC hours:
let a = new Date();
let b = a.getUTCHours();
console.log('b', b);
//: 17


// Get the UTC hours from a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getUTCHours();
console.log('d', d);
//: 0

// Description:
// getUTCHours() returns the hour (0 to 23) of a date.
// getUTCHours() returns the hour according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCHours()

// Parameters:
// NONE

// Return:
	// A number.
		// The hour of a date (0 to 23).

// History:
// getUTCHours() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
