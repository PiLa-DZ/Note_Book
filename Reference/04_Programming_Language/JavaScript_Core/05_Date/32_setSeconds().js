// Example 1
// Set the seconds to 35:
let a = new Date();
let b = a.setSeconds(35);
console.log('b', b);
//: 1729364075339

// Example 2
// Set both the seconds and milliseconds:
let c = new Date();
let d = c.setSeconds(35, 825);
console.log('d', d);
//: 1729364075825

// Description:
// The setSeconds() method sets the seconds of a date object.
// This method can also be used to set the milliseconds.

// Syntax:
// Date.setSeconds(sec, millisec)

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
// setSeconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
