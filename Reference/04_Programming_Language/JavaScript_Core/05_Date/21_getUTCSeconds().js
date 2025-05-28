// Get UTC seconds:
let a = new Date();
let seconds = a.getUTCSeconds();
console.log('seconds', seconds);
//: 30


// Using getUTC methods to display the universal time:
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

let d = new Date();
let h = addZero(d.getUTCHours());
let m = addZero(d.getUTCMinutes());
let s = addZero(d.getUTCSeconds());
let time = h + ":" + m + ":" + s;
console.log('time', time);
//: 17:10:30

// Description:
// getUTCSeconds() returns the seconds (0 to 59) of a date.
// getUTCSeconds() returns the seconds according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).
// All JavaScript getUTC methods assume that the date is of local time.

// Syntax:
// Date.getUTCSeconds()

// Parameters:
// NONE

// Return:
// A number	The seconds of the date (0 to 59).

// History:
// getUTCSeconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
