// Example 1
// Set the minutes to 17, according to UTC time:
let a = new Date();
let b = a.setUTCMinutes(17);
console.log('b', b);
//: 1729369024400

// Example 2
// Set the date time to be 90 minutes ago, using UTC methods:
let c = new Date();
let d = c.setUTCMinutes(c.getUTCMinutes() - 90);
console.log('d', d);
//: 1729363864411

// Description:
// The setUTCMinutes() method sets the minutes of a date object, according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.setUTCMinutes(min, sec, millisec)

// Parameter:
// min 	Required. An integer representing the minutes.
		// Expected values are 0-59, but other values are allowed:
		// -1 will result in the last minute of the previous hour
		// 60 will result in the first minute of the next hour
// sec 	Optional. An integer representing the seconds
		// Expected values are 0-59, but other values are allowed:
		// -1 will result in the last second of the previous minute
		// 60 will result in the first second of the next minute
// millisec 	Optional. An integer representing the milliseconds
		// Expected values are 0-999, but other values are allowed:
		// -1 will result in the last millisecond of the previous second
		// 1000 will result in the first millisecond of the next second

// Technical Details:
// Return Value: 	A number.
// Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// History:
// setUTCMinutes() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
