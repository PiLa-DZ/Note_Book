// Get the time:
let a = new Date();
let time = a.getTime();
console.log('time', time);
//: 1729356775965

// Calculate the number of years since January 1, 1970:
// Calculate milliseconds in a year
let minute = 1000 * 60;
let hour = minute * 60;
let day = hour * 24;
let year = day * 365;

// Divide Time with a year
let d = new Date();
let years = Math.round(d.getTime() / year);
console.log('years', years);
//: 55

// Description:
// getTime() returns the number of milliseconds since January 1, 1970 00:00:00.

// See Also:
// The Date.now() Method

// Syntax:
// Date.getTime()

// Parameters:
// NONE

// Return:
// A number	Number of milliseconds since January 1, 1970 00:00:00.

// History:
// getTime() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
