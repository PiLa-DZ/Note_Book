let arr = ['c', '2', '1', 'a'];

let result = arr.toSorted();

console.log(arr);
//: ['c', '2', '1', 'a']

console.log(result);
//: [ '1', '2', 'a', 'c' ]

// Description:
// The toSorted() method sorts the elements of an array in alphabetical order.
// The toSorted() method returns a new array.
// The toSorted() method does not overwrite the original array.
// The toSorted() method is the copying version of the sort() method.

// See Also:
// The Array sort() Method
// The Array reverse() Method

// Sort Compare Function:
// Sorting alphabetically works well for strings ("Apple" comes before "Banana").
// But, sorting numbers can produce incorrect results.
// "25" is bigger than "100", because "2" is bigger than "1".
// You can fix this by providing a "compare function" (See examples below).

// Syntax:
// array.sort(compareFunction)

// Parameters:
// compareFunction 	Optional.
	// A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
		// function(a, b){return a-b}

	// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

	// Example:

	// The sort function will sort 40 as a value lower than 100.

	// When comparing 40 and 100, sort() calls the function(40,100).

	// The function calculates 40-100, and returns -60 (a negative value).

// Return:
// Array	A new array with the items sorted.

// History:
// toSorted() is an ES2023 feature.
// It is supported in all modern browsers since July 2023
