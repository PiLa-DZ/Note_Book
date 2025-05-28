let arr = ['c', '2', '1', 'a'];

arr.sort();

console.log(arr);
//: [ '1', '2', 'a', 'c' ]

// Description:
// The sort() method sorts the elements of an array.
// The sort() method sorts the elements as strings in alphabetical and ascending order.
// The sort() method overwrites the original array.

// See Also:
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
// Array	The array with the items sorted.

// History:
// sort() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers
