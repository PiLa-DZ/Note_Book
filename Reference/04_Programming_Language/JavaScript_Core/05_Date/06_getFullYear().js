// Get the year:
let a = new Date();
let b = a.getFullYear();
console.log('b', b);
//: 2024

// Get the year of a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getFullYear();
console.log('d', d);
//: 1983

// Description:
// getFullYear() returns the full year of a date.

// Syntax:
// Date.getFullYear()

// Parameters:
// NONE

// Return:
	// A number	The year of the date.
		// (4 digits for dates between year 1000 and 9999).

// History:
// getFullYear() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
