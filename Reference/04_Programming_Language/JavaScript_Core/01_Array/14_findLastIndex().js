// Find the last element with a value over 18:
let ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

let result = ages.findLastIndex(checkAge);

console.log(result);
//: 3

// Description:
// The findLastIndex() method executes a function for each array element.
// The findLastIndex() method returns the index (position) of the last element that passes a test.
// The findLastIndex() method returns -1 if no match is found.
// The findLastIndex() method does not execute the function for empty array elements.
// The findLastIndex() method does not change the original array.

// Array Find Methods:
// indexOf()		The index of the first element with a specified value
// lastIndexOf()	The index of the last element with a specified value
// find()			The value of the first element that passes a test
// findIndex()		The index of the first element that passes a test
// findLast()		The value of the last element that passes a test
// findLastIndex()	The index of the last element that passes a test

// Syntax:
// array.findLastIndex(function(currentValue, index, arr), thisValue)

// Parameters:
// function() 	Required.  // A function to be run for each array element.
// currentValue Required.  // The value of the current element.
// index		Optional.  // The index of the current element.
// arr			Optional.  // The array of the current element.
// thisValue 	Optional. Default undefined.  // A value passed to the function as its this value.

// Return:
// Number	The index of the last element that passes the test.
// Otherwise -1.

// History:
// findLastIndex() is an ES2023 feature.
// It is supported in all modern browsers since July 2023:
