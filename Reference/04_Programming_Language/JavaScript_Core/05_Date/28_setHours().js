// Example 1
let a = new Date();
let b = a.setHours(15);
console.log('b', b);
//: 1729348775871

// Example 2
// Set the time to 15:35:01
let c = new Date();
let d = c.setHours(15, 35, 1);
console.log('d', d);
//: 1729348501881

// Example 3
// Set the time to 48 hours ago:
let e = new Date();
let f = e.setHours(e.getHours() - 48);
console.log('f', f);
//: 1729190375881

// Description:
// setHours() sets the hour of a date.
// setHours() can also set minutes, seconds and milliseconds.

// Syntax:
// Date.setHours(hour, min, sec, millisec)

// Parameters:
// hour 	Required. The Hours.
		// 0 to 23, but other values are allowed:
		// -1 gives the last hour of the previous day
		// 24 gives the first hour of the next day
// min 	Optional. The Minutes.
		// 0 to 59, but other values are allowed:
		// -1 gives the last minute of the previous hour
		// 60 gives the first minute of the next hour
// sec 	Optional. The seconds.
		// 0 to 59, but other values are allowed:
		// -1 gives the last second of the previous minute
		// 60 gives the first second of the next minute
// millisec 	Optional. The milliseconds.
		// 0 to 999, but other values are allowed:
		// -1 gives the last millisecond of the previous second
		// 1000 gives the first millisecond of the next second

// Return:
	// A number.
		// Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// History:
// setHours() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
