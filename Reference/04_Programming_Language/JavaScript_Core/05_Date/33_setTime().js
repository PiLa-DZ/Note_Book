// Example 1
// Add 1332403882588 milliseconds to January 1, 1970:
let a = new Date();
let b = a.setTime(1332403882588);
console.log('b', b);
//: 1332403882588

// Example 2
// Subtract 1332403882588 milliseconds from January 1, 1970:
let c = new Date();
let d = c.setTime(-1332403882588);
console.log('d', d);
//: -1332403882588

// Description:
// The setTime() method sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.

// Syntax:
// Date.setTime(millisec)

// Parameter:
// millisec 	Required. The number of milliseconds to be added to, or subtracted from, midnight January 1, 1970

// Technical Details:
// Return Value: 	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
// JavaScript Version: 	ECMAScript 1

// History:
// setTime() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
