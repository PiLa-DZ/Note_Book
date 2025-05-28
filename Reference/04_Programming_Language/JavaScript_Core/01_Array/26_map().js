// Example 1
// Return a new array with the square root of all element values:
let arr = [4, 9, 16, 25];

let newArr = arr.map(Math.sqrt);

console.log(newArr);
//: [ 2, 3, 4, 5 ]


// Example 2
// Multiply all the values in an array with 10:
let arr2 = [65, 44, 12, 4];

function myFunction(num) {
  return num * 10;
}

let newArr2 = arr2.map(myFunction)

console.log(newArr2);
//: [ 650, 440, 120, 40 ]

// Description:
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


// Array Iteration Methods:
// The Array entries() Method
// The Array every() Method
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// Syntax:
// array.map(function(currentValue, index, arr), thisValue)

// Parameters:
// function() 	Required.  // A function to be run for each array element.
// currentValue 	Required.  // The value of the current element.
// index 	Optional.  // The index of the current element.
// arr 	Optional.  // The array of the current element.
// thisValue 	Optional.  // Default value undefined.  // A value passed to the function to be used as its this value.

// Return:
// An array	The results of a function for each array element.

// History:
// map() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
