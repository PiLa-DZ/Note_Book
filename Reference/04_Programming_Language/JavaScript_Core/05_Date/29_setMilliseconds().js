let a = new Date();
let b = a.setMilliseconds(192);
console.log('b', b);
//: 1729363410192


// Description:
// setMilliseconds() sets the milliseconds of a date.

// Syntax:
// Date.setMilliseconds(millisec)

// Parameters:
// millisec 	Required. The milliseconds.
	// (0 to 999), but other values are allowed:
    // -1 gives the last millisecond of the previous second
    // 1000 gives first millisecond of the next second
    // 1001 gives the second millisecond of the next second

// Return:
	// A number.
		// Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// History:
// setMilliseconds() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
