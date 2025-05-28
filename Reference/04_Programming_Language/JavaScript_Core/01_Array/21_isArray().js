// Example 1
// Check if an object is an array:
let arr = ['a', 'b', 'c']
let result = Array.isArray(arr)
console.log(result)
//: true

// Example 2
// Check if another datatype is an array:
let str = 'abc'
let result2 = Array.isArray(str)
console.log(result2)
//: false

// Description:
// The isArray() method returns true if an object is an array, otherwise false.

// Array.isArray():
// Array.isArray() is a static property of the JavaScript Array object.
// You can only use it as Array.isArray().
// Using x.isArray(), where x is an array will return undefined.

// Syntax:
// Array.isArray(obj)

// Parameters:
// obj 	Required.  // An object (or any data type) to be tested.

// Return:
// A boolean	true if the object is an array, otherwise false.

// History:
// isArray() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013
