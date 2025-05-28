// Find the first index of "Apple":
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.indexOf("Apple");

console.log(result);
//: 2

// Description:
// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).

// Array Find Methods:
// indexOf()		The index of the first element with a specified value
// lastIndexOf()	The index of the last element with a specified value
// find()			The value of the first element that passes a test
// findIndex()		The index of the first element that passes a test
// findLast()		The value of the last element that passes a test
// findLastIndex()	The index of the last element that passes a test

// Syntax:
// array.indexOf(item, start)

// Parameters:
// item 	Required.  // The value to search for.
// start 	Optional.  // Where to start the search.  // Default value is 0.  // Negative values start the search from the end of the array.

// Return:
// A number	The index (position) of the first item found.
// -1 if the item is not found.

// History:
// indexOf() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
