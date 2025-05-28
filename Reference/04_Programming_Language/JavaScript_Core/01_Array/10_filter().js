// Return an array of all values in ages[] that are 18 or over:
// Example 1
let ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

let result = ages.filter(checkAdult);

console.log(result);
//: [ 32, 33, 40 ]


// Example 2
console.log([1,2,3,4].filter(elm => elm > 2))
//: [ 3, 4 ]

// Description:
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.


// Array Iteration Methods:
// The Array entries() Method
// The Array every() Method
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// Syntax
// array.filter(function(currentValue, index, arr), thisValue)

// Parameters
// function() 	Required.  // A function to run for each array element.
// currentValue 	Required.  // The value of the current element.
// index 	Optional.  // The index of the current element.
// arr 	Optional.  // The array of the current element.
// thisValue 	Optional. Default undefined // A value passed to the function as its this value.

// Return Value
// Array	An array of elements that pass the test.  // An empty array if no elements pass the test.

// History:
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
