// Get the minutes:
let a = new Date();
let b = a.getMinutes();
console.log('b', b);
//: 43


// Get the minutes of a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getMinutes();
console.log('d', d);
//: 15

// Description:
// getMinutes() returns the minutes (0 to 59) of a date.

// Syntax:
// Date.getMinutes()

// Parameters:
// NONE

// Return:
// A number	The minutes of the date (0 to 59).

// History:
// getMinutes() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
