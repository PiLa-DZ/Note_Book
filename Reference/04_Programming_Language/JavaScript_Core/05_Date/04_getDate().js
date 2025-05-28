// Get the day of the month:
let a = new Date();
let b = a.getDate();
console.log('b', b);
//: 19

// Get the day of a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getDate();
console.log('d', d);
//: 21

// Description:
// The getDate() method returns the day of the month (1 to 31) of a date.

// Syntax:
// Date.getDate()

// Parameters:
// NONE

// Return:
// A number	The day of the month (1 to 31).

// History:
// getDate() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
