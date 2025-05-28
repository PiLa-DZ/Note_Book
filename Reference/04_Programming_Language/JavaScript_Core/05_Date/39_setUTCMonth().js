// Example 1
// Set the month to 4 (May):
let a = new Date();
let b = a.setUTCMonth(4);
console.log('b', b);
//: 1716150268458

// Example 2
// Set the month to 4 (May) and the day to the 20th:
let c = new Date();
let d = c.setUTCMonth(4, 20);
console.log('d', d);
//: 1716236668477

// Example 3
// Set the date to be the last day of last month:
let e = new Date();
let f = e.setUTCMonth(e.getUTCMonth(), 0);
console.log('f', f);
//: 1727727868478

// Description:
// The setUTCMonth() method sets the month (from 0 to 11) of a date object, according to UTC.
// Note: January is 0, February is 1, and so on.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.setUTCMonth(month, day)

// Parameter:
// month 	Required. An integer representing the month
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

// Technical Details:
// Return Value: 	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
// JavaScript Version: 	ECMAScript 1

// History:
// setUTCMonth() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
