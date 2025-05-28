// Example 1
// Set the minutes to 17:
let a = new Date();
let b = a.setMinutes(17);
console.log('b', b);
//: 1729361875319

// Example 2
// Set the date time to be 90 minutes ago:
let c = new Date();
let d = c.setMinutes(c.getMinutes() - 90);
console.log('d', d);
//: 1729358275328

// Description:
// setMinutes() sets the minutes of a date.
// This method can also be used to set the seconds and milliseconds.

// Syntax:
// Date.setMinutes(min, sec, millisec)

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
// Return Value: 	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
// JavaScript Version: 	ECMAScript 1

// History:
// setMinutes() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
