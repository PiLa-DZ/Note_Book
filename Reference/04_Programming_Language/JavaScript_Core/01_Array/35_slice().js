// Example 1
// Select elements:
let arr_1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let result_1 = arr_1.slice(2, 4);
console.log(result_1);
//: [ 'c', 'd' ]

// Example 2
// Select elements:
let arr_2 = ['a', 'b', 'c', 'd', 'e', 'f'];
let result_2 = arr_2.slice(-4, -2);
console.log(result_2);
//: [ 'c', 'd' ]

// Description:
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

// See Also:
// The Array splice() Method
// The Array toSpliced() Method

// Syntax:
// array.slice(start, end)

// Parameters
// start 	Optional.  // Start position. Default is 0.  // Negative numbers select from the end of the array.
// end 	Optional.  // End position. Default is last element.  // Negative numbers select from the end of the array.

// Return Value
// A new array containing the selected elements.

// History: 
// slice() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
