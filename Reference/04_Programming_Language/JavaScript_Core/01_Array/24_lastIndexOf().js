// Example 1
// Find the last index of "Apple":
let arr = ["Apple", "Orange", "Apple", "Mango"];
let result = arr.lastIndexOf("Apple");

console.log(result);
//: 2

// Example 2
// More than one apple:
let arr2 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
let result2 = arr2.lastIndexOf("Apple");

console.log(result2);
//: 5

// Description:
// The lastIndexOf() method returns the last index (position) of a specified value.
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() starts at a specified index and searches from right to left (from the given postion to the beginning of the array).
// By defalt the search starts at the last element and ends at the first.
// Negative start values counts from the last element (but still searches from right to left).

// Array Find Methods:
// indexOf()	The index of the first element with a specified value
// lastIndexOf()	The index of the last element with a specified value
// find()	The value of the first element that passes a test
// findIndex()	The index of the first element that passes a test
// findLast()	The value of the last element that passes a test
// findLastIndex()	The index of the last element that passes a test

// Syntax:
// array.lastIndexOf(item, start)

// Parameters:
// item 	Required.  // The value to search for.
// start 	Optional.  // Where to start the search.  // Default is the last element (array.length-1).  // Negative start values counts from the last element (but still searches from right to left).

// Return:
// A number	The position of the specified item.
// -1 if the item is not found.

// History:
// lastIndexOf() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
