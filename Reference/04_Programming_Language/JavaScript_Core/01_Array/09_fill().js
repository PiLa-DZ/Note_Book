// Fill all the elements with a value:
let arr = ['a', 'b', 'c'];

arr.fill('0');

console.log(arr);
//: [ '0', '0', '0' ]

// Description:
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.

// Syntax:
// array.fill(value, start, end)

// Parameters:
// value 	Required.  // The value to fill in.
// start 	Optional.  // The start index (position).  // Default is 0.
// end 	Optional.  // The stop index (position).  // Default is array length.

// Return:
// Array	The filled array.

// History:
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
