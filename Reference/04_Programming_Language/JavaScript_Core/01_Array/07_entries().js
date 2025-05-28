// Create an Array
let arr = ['a', 'b', 'c'];

// Create an Iterator
const list = arr.entries();

// List the Entries
for (let x of list) {
	console.log(x)
}

//: [ 0, 'a' ]
//: [ 1, 'b' ]
//: [ 2, 'c' ]

// Description:
// The entries() method returns an Iterator object with the key/value pairs from an array:
// The entries() method does not change the original array.


// Array Iteration Methods:
// The Array entries() Method
// The Array every() Method
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// Syntax:
// array.entries()

// Parameters:
// NONE

// Return:
// Iterable	An Iterable object with the key/value pairs from the array.

// History:
// ES6 (JavaScript 2015) is supported in all modern browsers since June 2017
