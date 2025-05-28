// Get a date as a string, formatted as a JSON date:
let a = new Date();
let b = a.toJSON();
console.log('b', b);
//: 2024-10-19T20:33:41.848Z

// Description:
// The toJSON() method returns a date object as a string, formatted as a JSON date.
// JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ

// Syntax:
// Date.toJSON()

// Parameters:
// None

// Technical Details:
// Return Value: 	A String, representing the date and time formated as a JSON date
// JavaScript Version: 	ECMAScript 5

// History:
// toJSON() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
