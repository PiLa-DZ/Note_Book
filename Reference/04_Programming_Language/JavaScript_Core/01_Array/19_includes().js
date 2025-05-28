const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

// Example 1
let arr = ['a', 'b', 'c']
let result = arr.includes('b')
console.log(result)
//: true

// Example 2
let arr2 = ['a', 'b', 'c']
let result2 = arr2.includes('d')
console.log(result2)
//: false

// Description:
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// Syntax:
// array.includes(element, start)

// Parameters:
// element 	Required.  // The value to search for.
// start 	Optional.  // Start position. Default is 0.

// Return:
// A boolean	true if the value is found, otherwise false.

// History:
// includes() is an ECMAScript7 (ES7) feature.
// ES7 (JavaScript 2016) is supported in all modern browsers
