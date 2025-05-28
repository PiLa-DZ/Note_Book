// Get the hours:
let a = new Date();
let b = a.getHours();
console.log('b', b);
//: 17


// Get the hours from a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getHours();
console.log('d', d);
//: 1

// Description:
// getHours() returns the hour (0 to 23) of a date.

// Syntax:
// Date.getHours()

// Parameters:
// NONE

// Return:
// A number	The local time hour (0 to 23).

// History:
// getHours() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
