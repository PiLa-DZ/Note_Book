// Create an Array
let arr = ['a', 'b', 'e', 'f'];

// At position 2, add "Lemon" and "Kiwi":
let result = arr.toSpliced(2, 0, 'c', 'd');

console.log(arr);
//: ['a', 'b', 'e', 'f']

console.log(result);
//: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Description:
// The toSpliced() method adds and/or removes array elements.
// The toSpliced() method returns a new array.
// The toSpliced() method does not change the original array.
// The toSpliced() method is the copying version of the splice() method.

// See Also:
// The Array splice() Method
// The Array slice() Method

// Syntax:
// array.toSpliced(index, count, item1, ....., itemX)

// Parameters:
// index 	Required.  // The index (position) to add or remove items.  // A negative value counts from the end of the array.
// count 	Optional.  // Number of items to be removed.
// item1,... 	Optional.  // The new elements(s) to be added.

// Return:
// Array 	A new array including the changes.

// History:
// toSpliced() is an ES2023 feature.
// It is supported in all modern browsers since July 2023
