let arr = ['a', 'b', 'c']

let arr2 = arr.copyWithin(0,1,2)

console.log(arr)
//: [ 'b', 'b', 'c' ]

console.log(arr2)
//: [ 'b', 'b', 'c' ]

// Description:
// The copyWithin() method copies array elements to another position in an array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.

// Syntax:
// array.copyWithin(where, start, end)

// Parameters:
// where	Required.   // The index (position) to copy the elements to.
// start 	Optional.   // The start index (position). Default is 0.
// end		Optional.	// The end index (position). Default is the array length.

// Return:
// Array	The changed array.

// History:
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
