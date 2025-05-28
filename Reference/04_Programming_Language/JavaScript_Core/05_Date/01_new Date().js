// Create a Date
const time_1 = new Date();
console.log('time_1', time_1);
//: time 2024-10-19T16:12:42.219Z

// Create a new date object with the current date and time:
const time_2 = new Date();
console.log('time_2', time_2);
//: 2024-10-19T16:23:30.852Z

// Create a new date using an ISO notation:
const time_3 = new Date("2015-03-25");
console.log('time_3', time_3);
//: 2015-03-25T00:00:00.000Z

// Create a new date from an existing date:
const time_4 = new Date("2015-03-25");
const time_5 = new Date(time_4);
console.log('time_5', time_5);
//: 2015-03-25T00:00:00.000Z

// Create a new date using milliseconds from Jan 1, 1970:
const time_6 = new Date(100000000000);
console.log('time_6', time_6);
//: 1973-03-03T09:46:40.000Z

// Using new Date(7 numbers) creates a date object with the specified date and time:
const time_7 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log('time_7', time_7);
//: 2018-12-24T09:33:30.000Z

// Description:
// The new Date() constructor creates a new Date object.

// Syntax:
// new Date(date)

// Parameters:
// date 	Optional.  // A timestamp (milliseconds) or a date time string.

// Return:
// Date	A new Date object.

// History:
// new Date() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
