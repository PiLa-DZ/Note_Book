let ms = Date.parse("March 21, 2012"); 
console.log('ms', ms);
//: 1332284400000

// Calculate the number of years between January 1, 1970 to March 21, 2012:
// Calculate milliseconds in a year
let minute = 1000 * 60;
let hour = minute * 60;
let day = hour * 24;
let year = day * 365;

// Compute years
let d = Date.parse("March 21, 2012");
let years = Math.round(d / year);
console.log('years', years);
//: 42


// Description:
// parse() parses a date string and returns the time difference since January 1, 1970.
// parse() returns the time difference in milliseconds.

// Syntax:
// Date.parse(datestring)

// Parameters:
// datestring 	Required.
	// A string representing a date.

// Return:
	// A number.
		// Milliseconds since January 1, 1970 00:00:00 UTC.

// History:
// parse() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
