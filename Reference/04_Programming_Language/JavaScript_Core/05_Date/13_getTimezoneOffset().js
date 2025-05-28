// Get the difference between UTC time and local time:
let d = new Date();
let diff = d.getTimezoneOffset();
console.log('diff', diff);
//: -60

// Description:
// getTimezoneOffset() returns the difference between UTC time and local time.
// getTimezoneOffset() returns the difference in minutes.
// For example, if your time zone is GMT+2, -120 will be returned.

// Notes:
// The value is not constant because of varying Daylight Saving Time.
// The Universal Time Coordinated (UTC) is the time set by the World Time Standard.
// UTC time is the same as GMT (Greenwich Mean Time).

// Syntax:
// Date.getTimezoneOffset()

// Parameters:
// NONE

// Return:
// A number	The time difference between UTC and Local Time in minutes.

// History:
// getTimezoneOffset() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
