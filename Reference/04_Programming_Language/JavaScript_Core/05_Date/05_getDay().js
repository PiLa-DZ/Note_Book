// Get the day of the week:
let a = new Date();
let b = a.getDay();
console.log('b', b);
//: 6

// Get the day of the week of a specific date:
let c = new Date("July 21, 1983 01:15:00");
let d = c.getDay();
console.log('d', d);
//: 4

// Description:
// The getDay() method returns the day of the week (0 to 6) of a date.
// Sunday = 0, Monday = 1, ... (See below):

// Syntax:
// Date.getDay()

// Parameters:
// NONE

// Return:
// A number	The day of the week (0 to 6).

// More Examples:
	// Get the name of the weekday (not just a number):
	// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	// 
	// const d = new Date();
	// let day = weekday[d.getDay()];

// History:
// getDay() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
