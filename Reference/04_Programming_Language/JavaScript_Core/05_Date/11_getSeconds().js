// Get the seconds:
let a = new Date();
let seconds = a.getSeconds();
console.log('seconds', seconds);
//: 40


// Add zeros and colons to display the time:
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

let d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m + ":" + s;
console.log('time', time);
//: 17:50:40

// Description:
// getSeconds() returns the seconds (0 to 59) of a date.

// Syntax:
// Date.getSeconds()

// Parameters:
// NONE

// Return:
// A number	The seconds of the date (0 to 59).

// History:
// getSeconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
