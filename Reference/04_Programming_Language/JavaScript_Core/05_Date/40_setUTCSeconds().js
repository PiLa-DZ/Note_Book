// Example 1
// Set the seconds to 35, according to UTC time:
let a = new Date();
let b = a.setUTCSeconds(35);
console.log('b', b);
//: 1729369655486

// Example 2
// Set both the seconds and milliseconds, according to UTC:
let c = new Date();
let d = c.setUTCSeconds(35, 825);
console.log('d', d);
//: 1729369655825

// Description:
// The setUTCSeconds() method sets the seconds of a date object, according to UTC.
// It can also be used to set the milliseconds.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.setUTCSeconds(sec, millisec)

// Parameter:
// sec 	Required. An integer representing the seconds
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
// setUTCSeconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
