// Search for the last occurrence of "planet":
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet");
console.log(result);
//: 36

// Description:
// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
// The lastIndexOf() method searches the string from the end to the beginning.
// The lastIndexOf() method returns the index from the beginning (position 0).
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() method is case sensitive.

// See Also:
// The indexOf() Method

// Syntax:
// string.lastIndexOf(searchvalue, start)

// Parameters:
// searchvalue 	Required.  // The string to search for.
// start 	Optional.  // The position where to start.  // Default value is string length.

// Return:
// A number	The position where the search-value occurs.
// -1 if it never occurs.

// History:
// lastIndexOf() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers

