// Example 1
// Set the year to 2015:
let a = new Date();
let b = a.setUTCFullYear(2015);
console.log('b', b);
//: 1445281458033

// Example 2
// Set the date to November 3, 2020, UTC time:
let c = new Date();
let d = c.setUTCFullYear(2020, 10, 3);
console.log('d', d);
//: 1604430258041

// Example 3
// Set the date to six months ago, UTC time:
let e = new Date();
let f = e.setUTCFullYear(e.getUTCFullYear, e.getUTCMonth() - 6);
console.log('f', f);
//: NaN

// Description:
// The setUTCFullYear() method sets the year of a date object, according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.setUTCFullYear(year, month, day)

// Parameter:
// year 	Required. A value representing the year, negative values are allowed
// month 	Optional. An integer representing the month
		// Expected values are 0-11, but other values are allowed:
		// -1 will result in the last month of the previous year
		// 12 will result in the first month of the next year
		// 13 will result in the second month of the next year
// day 	Optional. An integer representing the day of month
		// Expected values are 1-31, but other values are allowed:
		// 0 will result in the last hour of the previous month
		// -1 will result in the hour before the last hour of the previous month
		// If the month has 31 days:
		// 32 will result in the first day of the next month
		// If the month has 30 days:
		// 32 will result in the second day of the next month

// Return:
	// Number 	Milliseconds between the date object and midnight January 1 1970
// Technical Details:
	// JavaScript Version: 	ECMAScript 1

// History:
// setUTCFullYear() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
