// Example 1
// Set the day of the month, according to UTC:
let a = new Date();
let b = a.setUTCDate(15);
console.log('b', b);
//: 1729018847280

// Example 2
// Set the day of the month to the last day of the previous month:
let c = new Date();
let d = c.setUTCDate(0);
console.log('d', d);
//: 1727722847289

// Example 3
// Set the day of the month to a specified date:
let e = new Date("July 21, 1983 01:15:00");
let f = e.setUTCDate(15);
console.log('f', f);
//: 427076100000

// Description:
// The setUTCDate() method sets the day of a Date object, according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.setUTCDate(day)

// Parameter:
// day 	Required. An integer representing the day of a month.
		// Expected values are 1-31, but other values are allowed:
		// 0 will result in the last day of the previous month
		// -1 will result in the day before the last day of the previous month
		// If the month has 31 days:
		// 32 will result in the first day of the next month
		// If the month has 30 days:
		// 32 will result in the second day of the next month

// Technical Details:
// Return Value: 	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
// JavaScript Version: 	ECMAScript 1

// History:
// setUTCDate() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
