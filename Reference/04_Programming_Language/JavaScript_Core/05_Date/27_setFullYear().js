// Example 1
let a = new Date();
let b = a.setFullYear(2020);
console.log('b', b);
//: 1603132486532

// Example 2
let c = new Date();
let d = c.setFullYear(2020, 10, 3);
console.log('d', d);
//: 1604428486540

// Example 3
// Set the date to six months ago:
let e = new Date();
let f = e.setFullYear(e.getFullYear(), e.getMonth() - 6);
console.log('f', f);
//: 1713551686548

// Description:
// setFullYear() sets the year of a date.
// setFullYear() can also set month and day.

// Syntax:
// Date.setFullYear(year, month, day)

// Parameters:
// year 	Required.  // The year. Negative values are allowed.
// month 	Optional.  // The month (0 to 11).

// Higher and lower values are handeled with date maths:
    // -1 will result in the last month of the previous year
    // 12 will result in the first month of the next year
    // 13 will result in the second month of the next year
// day 	Optional.
	// The day (0 to 31).
	// Higher and lower values are handeled with date maths:
		// 0 gives the last day of the previous month
		// -1 gives the day before the last day of the previous month
		// 32 gives the first day of the next month (if 31 days)
		// 41 gives the tenth day of the next month (if 31 days)

// Return:
	// A number.
		// Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// History:
// setFullYear() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
