// Example 1
// Get the number of milliseconds between a date and January 1, 1970:
let ms = Date.UTC(2020, 02, 30);
console.log('ms', ms);
//: 1585526400000

// Example 2
// Create a date object using UTC time instead of local time:
let d = new Date(Date.UTC(2020, 02, 30));
console.log('d', d);
//: 2020-03-30T00:00:00.000Z

// Description:
// The Date.UTC() method returns the number of milliseconds between a specified date and midnight of January 1, 1970, according to UTC.

// Notes:
// UTC (Universal Time Coordinated) is the time set by the World Time Standard.
// UTC time is the same as GMT time (Greenwich Mean Time).

// Syntax:
// Date.UTC(year, month, day, hours, minutes, seconds, millisec)

// Date.UTC() is a static method of the Date object.
// You cannot use it on a date like d.UTC()
// The syntax is always Date.UTC().

// Parameter:
// year 	Required. A four-digit value representing the year, negative values are allowed
// month 	Required. An integer representing the month
		// Expected values are 0-11, but other values are allowed:
		// -1 will result in the last month of the previous year
		// 12 will result in the first month of the next year
		// 13 will result in the second month of the next year
// day 	Optional. An integer representing the day of month
		// Expected values are 1-31, but other values are allowed:
		// 0 will result in the last hour of the previous month
		// -1 will result in the hour before the last hour of the previous month
		// If the month has 31 days:
		// 32 will result in the first day of the next month
		// If the month has 30 days:
		// 32 will result in the second day of the next month
// hour 	Optional. Default 0. An integer representing the hour.
		// Expected values are 0-23, but other values are allowed:
		// -1 will result in the last hour of the previous day
		// 24 will result in the first hour of the next day
// min 	Optional. Default 0. An integer representing the minutes.
		// Expected values are 0-59, but other values are allowed:
		// -1 will result in the last minute of the previous hour
		// 60 will result in the first minute of the next hour
// sec 	Optional. Default 0. An integer representing the seconds
		// Expected values are 0-59, but other values are allowed:
		// -1 will result in the last second of the previous minute
		// 60 will result in the first second of the next minute
// millisec 	Optional. Default 0. An integer representing the milliseconds
		// Expected values are 0-999, but other values are allowed:
		// -1 will result in the last millisecond of the previous second
		// 1000 will result in the first millisecond of the next second

// Technical Details:
// Return Value: 	A Number, representing the number of milliseconds between the specified date-time and midnight January 1 1970
// JavaScript Version: 	ECMAScript 1

// History:
// Date.UTC() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
