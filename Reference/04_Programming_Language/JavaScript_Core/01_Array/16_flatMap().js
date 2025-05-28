let myArr = [1, 2, 3, 4, 5, 6];
let newArr = myArr.flatMap(x => [x, x * 10]);

console.log(myArr);
//: [ 1, 2, 3, 4, 5, 6 ]

console.log(newArr);
//: [ 1, 10,  2, 20,  3, 30,  4, 40,  5, 50, 6, 60 ]

// Description:
// The flatMap() method maps all array elements and creates a new flat array.
// flatMap() creates a new array from calling a function for every array element.
// flatMap() does not execute the function for empty elements.
// flatMap() does not change the original array.


// See Also:
// The Array map() Method
// The Array flatMap() Method
// The Array filter() Method
// The Array forEach() Method

// Syntax
// array.flatMap(function(currentValue, index, arr), thisValue)

// Parameters:
// function() 	Required.  // A function to be run for each array element.
// currentValue 	Required.  // The value of the current element.
// index 	Optional.  // The index of the current element.
// arr 	Optional.  // The array of the current element.
// thisValue 	Optional.  // Default value undefined.  // A value passed to the function to be used as its this value.

// Return:
// An array	An array with the elements as a result of a callback function and then flattened.

// History:
// JavaScript Array flatMap() is supported in all modern browsers since January 2020
