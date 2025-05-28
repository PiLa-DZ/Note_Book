// Set the milliseconds to 192, according to UTC time:
let a = new Date();
let b = a.setUTCMilliseconds(192);
console.log('b', b);
//: 1729369099192

// Description:
// The setUTCMilliseconds() method sets the milliseconds (from 0 to 999) of a date object, according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.setUTCMilliseconds(millisec)

// Parameter:
// millisec 	Required. An integer representing the milliseconds
	// Expected values are 0-999, but other values are allowed:
    // -1 will result in the last millisecond of the previous second
    // 1000 will result in the first millisecond of the next second
    // 1001 will result in the second millisecond of the next second

// Technical Details:
// Return Value: 	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
// JavaScript Version: 	ECMAScript 1

// History:
// setUTCMilliseconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
