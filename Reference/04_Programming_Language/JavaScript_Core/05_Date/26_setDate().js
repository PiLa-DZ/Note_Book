// Example 1 ====================================================
let a = new Date();
let b = a.setDate(15);
console.log('b', b);
//: 1729013188007

// Example 2 ====================================================
// Set the day of the month to the last day of the previous month:
let c = new Date();
let d = c.setDate(0);
console.log('d', d);
//: 1727717188015

// Example 3 ====================================================

// Set the day of the month in a specified date:
let e = new Date("July 21, 1983 01:15:00");
let f = e.setDate(15);
console.log('f', f);
//: 427076100000

// Description:
// setDate() sets the day of the month of a date.

// Syntax:
// Date.setDate(day)

// Parameters:
// day 	An integer representing the day (1 to 31).
	// Higher and lower values are handeled with date maths:
		// 0 gives the last day of the previous month
		// -1 gives the day before the last day of the previous month
		// 32 gives the first day of the next month (if 31 days)
		// 41 gives the tenth day of the next month (if 31 days)

// Return:
	// A number.
		// Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// History:
// setDate() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
