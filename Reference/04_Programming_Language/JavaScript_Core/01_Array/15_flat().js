// Example 1
// Create a new array with the sub-array elements concatenated:
let myArr = [[1,2],[3,4],[5,6]];
let newArr = myArr.flat();

console.log(myArr);
//: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(newArr);
//: [ 1, 2, 3, 4, 5, 6 ]

// Example 2
let myArr_2 = [1, 2, [3, [4, 5, 6], 7], 8];
let newArr_2 = myArr_2.flat(2);

console.log(myArr_2);
//: [ 1, 2, [ 3, [ 4, 5, 6 ], 7 ], 8 ]
console.log(newArr_2);
//: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Description:
// The flat() method concatenates sub-array elements.

// See Also:
// The Array map() Method
// The Array flatMap() Method
// The Array filter() Method
// The Array forEach() Method

// Syntax
// array.flat(depth)

// Parameters:
// depth 	Optional.
// How deep a nested array should be flattened.
// Default is 1.

// Return:
// An array	The flattened array.

// History:
// JavaScript Array flat() is supported in all modern browsers since January 2020
