let ms = Date.now();
console.log('ms', ms);
//: 1729358166909


// Calculate the number of years since 1970/01/01:
let minute = 1000 * 60;
let hour = minute * 60;
let day = hour * 24;
let year = day * 365;

let years = Math.round(Date.now() / year); 
console.log('years', years);
//: 55

// Description:
// Date.now() returns the number of milliseconds since January 1, 1970.

// Notes:
// Date.now() is a static method of the Date object.
// You cannot use it on a date like myDate.now()
// The syntax is always Date.now().

// Syntax:
// Date.now()

// Parameters:
// NONE

// Return:
	// A number.
		// The number of milliseconds since midnight January 1, 1970 00:00:00 UTC.

// History:
// Date.now() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
