// Check if any values are over 18:
let ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age > 18;
} 

let result = ages.some(checkAdult);

console.log(result);
//: true

// Description:
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// Syntax:
// array.some(function(value, index, arr), this)

// Parameters:
// function 	Required.  // A function to run for each array element.
// Function parameters:
	// value 	Required.  // The value of the current element.
	// index 	Optional.  // The index of the current element.
	// arr 	Optional.  // The array the current element belongs to.
// this 	Optional. Default undefined.  // A value passed to the function to be used as its "this" value.

// Return:
// A boolean	true if any of the aray elements pass the test, otherwise false.

// History:
// some() is an ECMAScript3 (ES3) feature.
// ES3 (JavaScript 1999) is fully supported in all browsers
