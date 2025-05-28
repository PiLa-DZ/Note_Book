// Create an Array
let arr = ['a', 'b', 'e', 'f'];

// At position 2, add "Lemon" and "Kiwi":
arr.splice(2, 0, 'c', 'd');

console.log(arr);
//: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Description:
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// See Also:
// The Array toSpliced() Method
// The Array slice() Method

// Syntax:
// array.splice(index, count, item1, ....., itemX)

// Parameters:
// index 	Required.  // The index (position) to add or remove items.  // A negative value counts from the end of the array.
// count 	Optional.  // Number of items to be removed.
// item1, ..., 	Optional.  // The new elements(s) to be added.

// Return:
// Array 	An array containing the removed items (if any).

// History:
// splice() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
