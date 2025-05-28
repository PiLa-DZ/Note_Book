// Add new elements to an array:
let arr = ['c', 'd'];

arr.unshift('a', 'b');

console.log(arr);
//: [ 'a', 'b', 'c', 'd' ]

// Description:
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.

// See Also:
// The Array shift() Method
// The Array push() Method
// The Array pop() Method

// Syntax:
// array.unshift(item1, item2, ..., itemX)

// Parameters:
// item1
// item2
// ..
// Minimum one item is required.

// Return Value
// Type 	Description
// A number	The new length of the array.

// History:
// unshift() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
