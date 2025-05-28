// Find the value of the last element with a value over 18:
let ages = [3, 10, 18, 22, 20];

function checkAge(age) {
  return age > 18;
}

let result = ages.findLast(checkAge);

console.log(result);
//: 20

// Note: .findLast() don't work in node.js

// Description:
// The findLast() method returns the value of the last element that passes a test.
// The findLast() method executes a function for each array element.
// The findLast() method returns undefined if no elements are found.
// The findLast() method does not execute the function for empty elements.
// The findLast() method does not change the original array.

// Array Find Methods:
// indexOf()		The index of the first element with a specified value
// lastIndexOf()	The index of the last element with a specified value
// find()			The value of the first element that passes a test
// findIndex()		The index of the first element that passes a test
// findLast()		The value of the last element that passes a test
// findLastIndex()	The index of the last element that passes a test

// Syntax:
// array.findLast(function(currentValue, index, arr),thisValue)

// Parameters:
// function() 	Required.  // A function to run for each array element.
// currentValue 	Required.  // The value of the current element.
// index 	Optional.  // The index of the current element.
// arr 	Optional.  // The array of the current element.
// thisValue 	Optional. Default undefined.  // A value passed to the function as its this value.

// Return:
// A value	The value of the last element that pass the test.  // Otherwise it returns undefined.

// History:
// findLast() is an ES2023 feature.
// It is supported in all modern browsers since July 2023:
