// Example 1
// Set the hour to 15, according to UTC time:
let a = new Date();
let b = a.setUTCHours(15);
console.log('b', b);
//: 1729350531006

// Example 2
// Set the time to 15:35:01 UTC time
let c = new Date();
let d = c.setUTCHours(15, 35, 1);
console.log('d', d);
//: 1729352101016

// Example 3
// Set the time to 48 hours ago, using UTC methods:
let e = new Date();
let f = e.setUTCHours(e.getUTCHours() - 48);
console.log('f', f);
//: 1729192131016

// Description:
// The setUTCHours() method sets the hour of a date object, according to UTC.
// It can also be used to set the minutes, seconds and milliseconds.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.setUTCHours(hour, min, sec, millisec)

// Parameter:
// hour 	Required. An integer representing the hour.
		// Expected values are 0-23, but other values are allowed:
		// -1 will result in the last hour of the previous day
		// 24 will result in the first hour of the next day
// min 	Optional. An integer representing the minutes.
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
// Return Value: 	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
// JavaScript Version: 	ECMAScript 1

// History:
// setUTCHours() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
