// Get the month:
let a = new Date();
let b = a.getMonth();
console.log('b', b);
//: 9

// Get the name of the month (not just a number):
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let c = new Date();
let name = month[c.getMonth()];
console.log('name', name);
//: October

// Description:
// getMonth() returns the month (0 to 11) of a date.
// January =0, February = 1, ... (see below):

// Syntax:
// Date.getMonth()

// Parameters:
// NONE

// Return:
// A number	The month of the date (0 to 11).

// History:
// getMonth() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
