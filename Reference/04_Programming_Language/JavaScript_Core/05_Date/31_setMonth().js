// Example 1
// Set the month to 4 (May):
let a = new Date();
let b = a.setMonth(4); 
console.log('b', b);
//: 1716144563120

// Example 2
// Set the month to 4 (May) and the day to 20:
let c = new Date();
let d = c.setMonth(4, 20);
console.log('d', d);
//: 1716231177042

// Example 3
// Set the date to the last day of last month:
let e = new Date();
let f = e.setMonth(e.getMonth(), 0);
console.log('f', f);
//: 1727722377043

// Description:
// The setMonth() method sets the month of a date object.
// Note: January is 0, February is 1, and so on.
// This method can also be used to set the day of the month.

// Syntax:
// Date.setMonth(month, day)

// Parameter:
// month 	Required. An integer representing the month
		// Expected values are 0-11, but other values are allowed:
		// -1 will result in the last month of the previous year
		// 12 will result in the first month of the next year
		// 13 will result in the second month of the next year
// day 	Optional. An integer representing the day of month
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
// setMonth() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
