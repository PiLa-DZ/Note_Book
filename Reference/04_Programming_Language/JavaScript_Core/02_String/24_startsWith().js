// Example 1 ========================================
// Start at position 0 (true):
let str_1 = "Hello world, welcome to the universe.";

let result_1 = str_1.startsWith("Hello");

console.log(result_1);
//: true

// Example 2 ========================================
// Start at position 1 (false):
let str_2 = "Hello world, welcome to the universe.";

let result_2 = str_2.startsWith("Hello", 1);

console.log(result_2);
//: false

// Description:
// The startsWith() method returns true if a string starts with a specified string.
// Otherwise it returns false.
// The startsWith() method is case sensitive.

// See Also:
// The endsWith() Method

// Syntax:
// string.startsWith(searchValue, start)

// Parameters:
// searchValue 	Required.  // The string to search for.
// start 	Optional.  // Start position. Default is 0.

// Return:
// A boolean	Returns true if the string starts with the value.
// Otherwise it returns false.

// History:
// startsWith() is an ECMAScript6 (ES6) feature.
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017

